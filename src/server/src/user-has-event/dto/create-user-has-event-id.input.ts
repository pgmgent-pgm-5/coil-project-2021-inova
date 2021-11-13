import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserHasEventIdInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  eventId: string;
}
