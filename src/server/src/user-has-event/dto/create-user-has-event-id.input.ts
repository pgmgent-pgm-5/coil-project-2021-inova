import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserHasEventIdInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  eventId: string;
}
