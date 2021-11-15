import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserHasEventService } from './user-has-event.service';
import { UserHasEvent } from './entities/user-has-event.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
@Resolver(() => UserHasEvent)
export class UserHasEventResolver {
  constructor(private readonly userHasEventService: UserHasEventService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserHasEvent], { name: 'userHasEvent' })
  findAll() {
    return this.userHasEventService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserHasEvent, { name: 'userHasEventFindEvents' })
  findOne(@Args('id') id: string) {
    return this.userHasEventService.findOne(id);
  }

  @Query(() => UserHasEvent, { name: 'userHasEventFindByEventId' })
  findOneByEventId(@Args('id') id: string) {
    return this.userHasEventService.findUserByEventId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserHasEvent, { name: 'userHasEventFindEventsByuserIdEventId' })
  findOneByUserIdEventId(
    @Args('userId') userId: string,
    @Args('eventId') eventId: string,
  ) {
    return this.userHasEventService.findByEventIdUserId(userId, eventId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserHasEvent)
  removeUserHasEvent(@Args('id', { type: () => Int }) id: number) {
    return this.userHasEventService.remove(id);
  }
}
