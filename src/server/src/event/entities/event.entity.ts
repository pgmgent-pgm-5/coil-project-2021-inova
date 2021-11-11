import { ObjectType, Field } from '@nestjs/graphql';
import { UserHasEvent } from 'src/user-has-event/entities/user-has-event.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field()
  updatedAt: Date;

  @OneToMany(() => UserHasEvent, (userHasEvent) => userHasEvent.event, {
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  @Field(() => [UserHasEvent])
  userHasEvent: UserHasEvent[];
}
