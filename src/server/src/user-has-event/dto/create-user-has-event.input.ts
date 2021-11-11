import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserHasEventInput {
  @Field(() => String)
  userId: string;
}
