import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './database.config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { EventModule } from './event/event.module';
import { UserHasEventModule } from './user-has-event/user-has-event.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    UserModule,
    AuthModule,
    ProfileModule,
    EventModule,
    UserHasEventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
