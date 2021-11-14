import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { CreateUserHasEventIdInput } from 'src/user-has-event/dto/create-user-has-event-id.input';

@InputType()
export class CreateExpenceInput {
  @IsInt()
  @Field(() => Int)
  sum: number;

  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field(() => CreateUserHasEventIdInput)
  createUserHasEventIdInput: CreateUserHasEventIdInput;
}
