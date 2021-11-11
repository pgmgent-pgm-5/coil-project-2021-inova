import { Field, ObjectType } from '@nestjs/graphql';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({
    unique: true,
  })
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @OneToOne(() => Profile, {
    cascade: ['remove', 'update'],
  })
  @JoinColumn()
  @Field(() => Profile, { nullable: true })
  profile: Profile;
}
