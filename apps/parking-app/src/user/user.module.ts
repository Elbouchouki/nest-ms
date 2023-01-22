import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { RmqModule } from '@app/common';
import { USERS_SERVICE } from '../constants/services';

@Module({
  imports: [
    RmqModule.register({
      name: USERS_SERVICE,
    }),
    UserModule,
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
