import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateEventInput {
  @Field()
  id: string;

  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  updatedAt: Date;
}
