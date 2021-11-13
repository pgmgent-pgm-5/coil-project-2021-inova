import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventInfo } from 'src/event/entities/eventInfo.entity';
import { UserHasEvent } from 'src/user-has-event/entities/user-has-event.entity';
import { UserHasEventService } from 'src/user-has-event/user-has-event.service';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateExpenceInput } from './dto/create-expence.input';
import { UpdateExpenceInput } from './dto/update-expence.input';
import { Expence } from './entities/expence.entity';

@Injectable()
export class ExpenceService {
  constructor(
    @InjectRepository(Expence)
    private expenceRepository: Repository<Expence>,
    private userHasEventService: UserHasEventService,
  ) {}

  async create(createExpenceInput: CreateExpenceInput) {
    const expence = this.expenceRepository.create(createExpenceInput);
    expence.userEvent = await this.userHasEventService.createById(
      createExpenceInput.createUserHasEventIdInput,
    );
    const user: UserHasEvent = null; // TODO get user info
    expence.calculation = this.createCalculation(
      user.displayOrder,
      expence.sum,
    );
    return this.expenceRepository.save(expence);
  }

  createCalculation(userDisplayOrder: number, sum: number): string[] {
    let previousCalculation: string[] = [];
    const membersAmount = 3; // TODO get event members
    const eventId = 'test';
    const latestExpence: Expence = this.getLatestExpence(eventId); // TODO get previous expence

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

  getLatestExpence(eventId: string): Expence {
    return null;
  }

  getLatestInfo(eventId: string, displayOrder: number): EventInfo {
    const result = new EventInfo();
    result.oweMe = [];
    result.oweThem = [];

    const userIndex = displayOrder - 1;
    const latestExpence = this.getLatestExpence(eventId);
    const usersInfo: [{ name: string; displayOrder: number }] = null; // TODO get users name and users displayOrder

    const matrix = this.deserializeCalculation(latestExpence.calculation);

    for (let i = 0; i < matrix.length; i++) {
      for (let k = 0; k < matrix[i].length; k++) {
        if (i == userIndex) {
          if (k == userIndex) {
            result.totalContribute = matrix[i][k];
          } else {
            const user = usersInfo.find((u) => u.displayOrder == k + 1);
            result.oweMe.push({ sum: matrix[i][k], userName: user.name });
          }
        } else {
          if (k == userIndex) {
            const user = usersInfo.find((u) => u.displayOrder == i + 1);
            result.oweThem.push({ sum: matrix[i][k], userName: user.name });
          }
        }
      }
    }

    return result;
  }

  // create(createExpenceInput: CreateExpenceInput) {
  //   const expence = this.expenceRepository.create(createExpenceInput);
  //   expence.event = this.userHasEventService.createById(
  //     createExpenceInput.createUserHasEventIdInput,
  //   );
  //   return this.expenceRepository.save(expence);
  // }

  findAll(eventId: string) {
    return this.expenceRepository.find({
      relations: ['userEvent'],
      where: { userEvent: { event: eventId } },
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} expence`;
  }

  update(id: string, updateExpenceInput: UpdateExpenceInput) {
    return `This action updates a #${id} expence`;
  }

  remove(id: string) {
    return `This action removes a #${id} expence`;
  }
}
