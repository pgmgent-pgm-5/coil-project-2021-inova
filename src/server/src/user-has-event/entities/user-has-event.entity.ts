import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Event } from 'src/event/entities/event.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Expence } from 'src/expence/entities/expence.entity';

@ObjectType()
@Entity()
export class UserHasEvent {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

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

  @ManyToOne(() => Event, (event) => event.userHasEvent, { eager: true })
  @Field(() => Event)
  event: Event;

  @ManyToOne(() => User, (user) => user.userHasEvent, { eager: true })
  @Field(() => User)
  user: User;

  // @ManyToOne(() => Expence, (expence) => expence.event, { eager: true })
  // @Field(() => Expence)
  // expence: Expence;
}
