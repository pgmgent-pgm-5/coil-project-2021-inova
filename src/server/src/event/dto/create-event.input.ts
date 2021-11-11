import { InputType, Field } from '@nestjs/graphql';
import { CreateUserHasEventInput } from 'src/user-has-event/dto/create-user-has-event.input';

@InputType()
export class CreateEventInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field(() => [CreateUserHasEventInput])
  createUserHasEventInput: CreateUserHasEventInput[];
}
