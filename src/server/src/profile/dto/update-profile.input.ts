import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateProfileInput {
  @Field()
  id: string;

  @IsString()
  @Field({ nullable: true })
  firstName: string;

  @IsString()
  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  image: string;
}
