import { forwardRef, Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasEventModule } from 'src/user-has-event/user-has-event.module';
import { ExpenceModule } from 'src/expence/expence.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    UserHasEventModule,
    forwardRef(() => ExpenceModule),
  ],
  providers: [EventResolver, EventService],
  exports: [EventService],
})
export class EventModule {}
