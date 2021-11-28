import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateProfileInput {
  @IsString()
  @Field({ nullable: true })
  firstName: string;

  @IsString()
  @Field({ nullable: true })
  lastName: string;

}
