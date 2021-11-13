import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateUserHasEventIdInput } from 'src/user-has-event/dto/create-user-has-event-id.input';

@InputType()
export class CreateExpenceInput {
  @Field(() => Int)
  sum: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field(() => CreateUserHasEventIdInput)
  createUserHasEventIdInput: CreateUserHasEventIdInput;
}
