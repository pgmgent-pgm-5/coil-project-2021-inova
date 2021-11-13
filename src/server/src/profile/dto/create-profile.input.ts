import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field({ nullable: true })
  image: string;
}
