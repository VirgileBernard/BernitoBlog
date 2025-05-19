
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule,],
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class AppModule { }
