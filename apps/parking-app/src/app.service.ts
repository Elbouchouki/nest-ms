import { Inject, Injectable } from '@nestjs/common';
import { USERS_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject(USERS_SERVICE) private usersClient: ClientProxy) {}
  async getHello() {
    await lastValueFrom(
      this.usersClient.emit('test_event', {
        name: 'hamid',
        lastname: '3aziz',
      }),
    );
    return 'YES';
  }
}
