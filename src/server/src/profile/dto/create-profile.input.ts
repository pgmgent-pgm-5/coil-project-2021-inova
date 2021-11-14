import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @IsString()
  @Field()
  firstName: string;

  @IsString()
  @Field()
  lastName: string;

  @Field({ nullable: true })
  image: string;
}
