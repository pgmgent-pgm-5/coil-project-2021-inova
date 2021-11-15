import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UserHasEventService } from 'src/user-has-event/user-has-event.service';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    private createUserHasEventService: UserHasEventService,
  ) {}

  async create(createEventInput: CreateEventInput): Promise<Event> {
    const ev = this.eventRepository.create(createEventInput);
    ev.userHasEvent = this.createUserHasEventService.create(
      createEventInput.createUserHasEventInput,
    );
    return this.eventRepository.save(ev);
  }

  findOne(id: string): Promise<Event> {
    return this.eventRepository.findOne({
      relations: ['userHasEvent'],
      where: { id: id },
    });
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }
  async update(id: string, updateEventInput: UpdateEventInput) {
    const event: Event = this.eventRepository.create(updateEventInput);
    event.id = id;
    return this.eventRepository.save(event);
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
