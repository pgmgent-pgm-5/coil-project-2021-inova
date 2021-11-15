import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventInfo } from 'src/event/entities/eventInfo.entity';
import { EventService } from 'src/event/event.service';
import { UserHasEvent } from 'src/user-has-event/entities/user-has-event.entity';
import { Event } from 'src/event/entities/event.entity';
import { UserHasEventService } from 'src/user-has-event/user-has-event.service';
import { Repository } from 'typeorm';
import { CreateExpenceInput } from './dto/create-expence.input';
import { Expence } from './entities/expence.entity';

@Injectable()
export class ExpenceService {
  constructor(
    @InjectRepository(Expence)
    private expenceRepository: Repository<Expence>,
    private userHasEventService: UserHasEventService,
    private eventService: EventService,
  ) {}

  async create(createExpenceInput: CreateExpenceInput) {
    const expence = this.expenceRepository.create(createExpenceInput);
    expence.userEvent = await this.userHasEventService.createById(
      createExpenceInput.createUserHasEventIdInput,
    );

    const user: UserHasEvent =
      await this.userHasEventService.findByEventIdUserId(
        expence.userEvent.user.id,
        expence.userEvent.event.id,
      );
    const event: Event = await this.eventService.findOne(user.event.id);
    expence.calculation = await this.createCalculation(
      user.displayOrder,
      expence.sum,
      event,
      event.userHasEvent.length,
    );

    return this.expenceRepository.save(expence);
  }

  async createCalculation(
    userDisplayOrder: number,
    sum: number,
    event: Event,
    membersAmount: number,
  ): Promise<string[]> {
    let previousCalculation: string[] = [];
    const latestExpence: Expence = await this.getLatestExpence(event);

    if (!latestExpence) {
      previousCalculation = this.setUpInitialCalculation(membersAmount);
    } else {
      previousCalculation = latestExpence.calculation;
    }

    const previousMatrix = this.deserializeCalculation(previousCalculation);

    const newCalculation = this.appendExpenceToCalculation(
      previousMatrix,
      userDisplayOrder,
      sum,
    );
    return this.serializeCalculation(newCalculation);
  }

  setUpInitialCalculation(membersAmount: number): string[] {
    const matrix: number[][] = [];
    for (let i = 0; i < membersAmount; i++) {
      const row: number[] = [];
      for (let k = 0; k < membersAmount; k++) {
        row.push(0);
      }
      matrix.push(row);
    }

    return this.serializeCalculation(matrix);
  }

  appendExpenceToCalculation(
    arr: number[][],
    userDisplayOrder: number,
    sum: number,
  ): number[][] {
    const userIndex = userDisplayOrder - 1;
    for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < arr[i].length; k++) {
        if (i == userIndex) {
          if (k == userIndex) {
            arr[i][k] += sum;
          } else {
            arr[i][k] += sum / arr[i].length;
          }
        }
      }
    }

    return arr;
  }

  deserializeCalculation(calculation: string[]): number[][] {
    const matrix: number[][] = [];
    calculation.forEach((value) => {
      const row = JSON.parse(value);
      matrix.push(row);
    });

    return matrix;
  }

  serializeCalculation(matrix: number[][]): string[] {
    const initialCalculation: string[] = [];

    matrix.forEach((value) => {
      initialCalculation.push(JSON.stringify(value));
    });

    return initialCalculation;
  }

  async getLatestExpence(event: Event): Promise<Expence> {
    if (!event.userHasEvent || !event.userHasEvent.length) {
      return null;
    }
    const expenses = event.userHasEvent
      .flatMap((u) => u.expence)
      .sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
      });

    if (!expenses || !expenses.length) {
      return null;
    }
    return expenses[0];
  }

  async getLatestInfo(event: Event, displayOrder: number): Promise<EventInfo> {
    const result = new EventInfo();
    result.oweMe = [];
    result.oweThem = [];

    const userIndex = displayOrder - 1;
    const latestExpence = await this.getLatestExpence(event);
    if (!latestExpence) {
      return result;
    }
    const usersInfo = event.userHasEvent.map((u) => ({
      lastName: u.user.profile.lastName,
      firstName: u.user.profile.firstName,
      displayOrder: u.displayOrder,
    }));

    const matrix = this.deserializeCalculation(latestExpence.calculation);

    for (let i = 0; i < matrix.length; i++) {
      for (let k = 0; k < matrix[i].length; k++) {
        if (i == userIndex) {
          if (k == userIndex) {
            result.totalContribute = matrix[i][k];
          } else {
            const user = usersInfo.find((u) => u.displayOrder == k + 1);
            matrix[i][k] &&
              result.oweMe.push({
                sum: matrix[i][k],
                firstName: user.firstName,
                lastName: user.lastName,
              });
          }
        } else {
          if (k == userIndex) {
            const user = usersInfo.find((u) => u.displayOrder == i + 1);
            matrix[i][k] &&
              result.oweThem.push({
                sum: matrix[i][k],
                firstName: user.firstName,
                lastName: user.lastName,
              });
          }
        }
      }
    }
    result.id = event.id;
    result.name = event.name;

    return result;
  }

  findAll(eventId: string) {
    return this.expenceRepository.find({
      relations: ['userEvent'],
      where: { userEvent: { event: eventId } },
    });
  }

  findOne(id: string): Promise<Expence> {
    return this.expenceRepository.findOne({
      relations: ['userHasEvent'],
      where: { id: id },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} expence`;
  }
}
