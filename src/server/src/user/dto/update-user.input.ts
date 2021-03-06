import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { UpdateProfileInput } from 'src/profile/dto/update-profile.input';

@InputType()
export class UpdateUserInput {
  @IsEmail()
  @Field({ nullable: true })
  email: string;

  @MinLength(6)
  @MaxLength(12)
  @IsString()
  @Field({ nullable: true })
  password: string;

  @Field(() => UpdateProfileInput, { nullable: true })
  profile: UpdateProfileInput;
}
