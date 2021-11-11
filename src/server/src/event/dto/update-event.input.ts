import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateEventInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  updatedAt: Date;
}
