import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class EventInfo {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  totalContribute: number;

  @Field(() => [OweInfo])
  oweMe: OweInfo[];

  @Field(() => [OweInfo])
  oweThem: OweInfo[];
}

@ObjectType()
class OweInfo {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  sum: number;
}
