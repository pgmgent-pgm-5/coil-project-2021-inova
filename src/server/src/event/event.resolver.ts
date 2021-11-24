import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventService } from './event.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { ExpenceService } from 'src/expence/expence.service';
import { UserHasEventService } from 'src/user-has-event/user-has-event.service';
import { UserHasEvent } from 'src/user-has-event/entities/user-has-event.entity';
import { EventInfo } from './entities/eventInfo.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUserFromToken';
@Resolver(() => Event)
export class EventResolver {
  constructor(
    private readonly eventService: EventService,
    private readonly expenceService: ExpenceService,
    private readonly userHasEventService: UserHasEventService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event, { name: 'createEvent' })
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventService.create(createEventInput);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Event], { name: 'getAllEvents' })
  findAll() {
    return this.eventService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Event, { name: 'getEvent' })
  async findEvent(@Args('id') id: string, @GetUser() user) {
    const uId = user.id;
    return this.eventService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => EventInfo, { name: 'getEventInfo' })
  async findOne(@Args('id') id: string, @GetUser() user) {
    const userId = user.id;
    const userHasEvent: UserHasEvent =
      await this.userHasEventService.findByEventIdUserId(userId, id);
    const event = await this.eventService.findOne(id);
    const eventInfo = await this.expenceService.getLatestInfo(
      event,
      userHasEvent.displayOrder,
    );
    return eventInfo;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventService.update(updateEventInput.id, updateEventInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Event)
  removeEvent(@Args('id', { type: () => Int }) id: number) {
    return this.eventService.remove(id);
  }
}
