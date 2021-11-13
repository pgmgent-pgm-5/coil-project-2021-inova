import { Module } from '@nestjs/common';
import { ExpenceService } from './expence.service';
import { ExpenceResolver } from './expence.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expence } from './entities/expence.entity';
import { UserHasEventModule } from 'src/user-has-event/user-has-event.module';

@Module({
  imports: [TypeOrmModule.forFeature([Expence]), UserHasEventModule],
  providers: [ExpenceResolver, ExpenceService],
})
export class ExpenceModule {}
