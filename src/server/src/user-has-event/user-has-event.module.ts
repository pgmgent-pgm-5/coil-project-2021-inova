import { Module } from '@nestjs/common';
import { UserHasEventService } from './user-has-event.service';
import { UserHasEventResolver } from './user-has-event.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasEvent } from './entities/user-has-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserHasEvent])],
  providers: [UserHasEventResolver, UserHasEventService],
  exports: [UserHasEventService],
})
export class UserHasEventModule {}
