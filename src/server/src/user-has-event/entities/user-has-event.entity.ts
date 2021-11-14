import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Event } from 'src/event/entities/event.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Expence } from 'src/expence/entities/expence.entity';

@ObjectType()
@Entity()
export class UserHasEvent {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  displayOrder: number;

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

  @OneToMany(() => Expence, (expence) => expence.userEvent, { eager: true })
  @Field(() => [Expence])
  expence: Expence[];
}
