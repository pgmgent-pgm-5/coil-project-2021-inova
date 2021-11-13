import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateExpenceInput {
  @Field()
  id: string;

  @Field(() => Int)
  sum: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  updatedAt: Date;
}
