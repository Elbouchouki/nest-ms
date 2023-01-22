import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule, RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RmqModule,
    PrismaModule.register({ logQueries: true }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersModule],
})
export class UsersModule {}
