import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserHasEventService } from './user-has-event.service';
import { UserHasEvent } from './entities/user-has-event.entity';
@Resolver(() => UserHasEvent)
export class UserHasEventResolver {
  constructor(private readonly userHasEventService: UserHasEventService) {}

  // @Mutation(() => UserHasEvent)
  // createUserHasEvent(
  //   @Args('createUserHasEventInput')
  //   createUserHasEventInput: [CreateUserHasEventInput],
  // ) {
  //   return this.userHasEventService.create(createUserHasEventInput);
  // }

  @Query(() => [UserHasEvent], { name: 'userHasEvent' })
  findAll() {
    return this.userHasEventService.findAll();
  }

  // @ResolveField()
  // async events(@Parent() parent: User) {
  //   return this.userHasEventService.findOne(parent.id);
  // }

  @Query(() => UserHasEvent, { name: 'userHasEventFindEvents' })
  findOne(@Args('id') id: string) {
    return this.userHasEventService.findOne(id);
  }

  @Query(() => UserHasEvent, { name: 'userHasEventFindEventsByuserIdEventId' })
  findOneByUserIdEventId(
    @Args('userId') userId: string,
    @Args('eventId') eventId: string,
  ) {
    return this.userHasEventService.findByEventIdUserId(userId, eventId);
  }

  @Mutation(() => UserHasEvent)
  removeUserHasEvent(@Args('id', { type: () => Int }) id: number) {
    return this.userHasEventService.remove(id);
  }
}
