import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

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

  @Field(() => String)
  eventId: string;
}
