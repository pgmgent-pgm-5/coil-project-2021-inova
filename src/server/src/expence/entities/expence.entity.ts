import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserHasEvent } from 'src/user-has-event/entities/user-has-event.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Expence {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field(() => Int)
  sum: number;

  @Column()
  @Field()
  name: string;

  @Column('text', { array: true, default: [] })
  @Field(() => String)
  calculation: string[];

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

  @ManyToOne(() => UserHasEvent)
  @Field(() => UserHasEvent)
  userEvent: UserHasEvent;
}
