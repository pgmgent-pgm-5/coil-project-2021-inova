import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CreateUserHasEventInput } from 'src/user-has-event/dto/create-user-has-event.input';

@InputType()
export class CreateEventInput {
  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field(() => [CreateUserHasEventInput])
  createUserHasEventInput: CreateUserHasEventInput[];
}
