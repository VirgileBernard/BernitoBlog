import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSchema } from './schemas/users.schema';
import { Connection } from 'mongoose';
import { databaseProviders } from 'src/database.providers';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...databaseProviders, {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('Users', UsersSchema),
    inject: ['DATABASE_CONNECTION']
  }
  ],

  exports: [UsersService],
})
export class UsersModule { }

