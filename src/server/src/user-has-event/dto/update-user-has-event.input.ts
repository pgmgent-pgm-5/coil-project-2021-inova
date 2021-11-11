import { CreateUserHasEventInput } from './create-user-has-event.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserHasEventInput extends PartialType(CreateUserHasEventInput) {
  @Field(() => Int)
  id: number;
}
