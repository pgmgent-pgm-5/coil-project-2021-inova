import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/event/entities/event.entity';
import { Repository } from 'typeorm';
import { CreateUserHasEventIdInput } from './dto/create-user-has-event-id.input';
import { CreateUserHasEventInput } from './dto/create-user-has-event.input';
import { UserHasEvent } from './entities/user-has-event.entity';

@Injectable()
export class UserHasEventService {
  constructor(
    @InjectRepository(UserHasEvent)
    private userHasEventRepository: Repository<UserHasEvent>,
  ) {}

  create(createUserHasEventInput: CreateUserHasEventInput[]) {
    const users = createUserHasEventInput.map((i, index) => ({
      user: {
        id: i.userId,
      },
      displayOrder: index + 1,
    }));
    return this.userHasEventRepository.create(users);
  }

  createById(createUserHasEventIdInput: CreateUserHasEventIdInput) {
    const userEvent = this.findByEventIdUserId(
      createUserHasEventIdInput.userId,
      createUserHasEventIdInput.eventId,
    );
    return userEvent;
  }

  findAll() {
    return `This action returns all userHasEvent`;
  }

  findOne(userId: string) {
    return this.userHasEventRepository.findOne({ where: { user: userId } });
  }

  findByEventIdUserId(userId: string, eventId: string) {
    return this.userHasEventRepository.findOne({
      where: { user: userId, event: eventId },
    });
  }

  // update(id: number, updateUserHasEventInput: UpdateUserHasEventInput) {
  //   return `This action updates a #${id} userHasEvent`;
  // }

  remove(id: number) {
    return `This action removes a #${id} userHasEvent`;
  }
}
