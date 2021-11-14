import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
@InputType()
export class LoginInput {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @MinLength(6)
  @MaxLength(12)
  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;
}
