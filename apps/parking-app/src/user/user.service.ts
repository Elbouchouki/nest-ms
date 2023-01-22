import { CreateUserInput, UpdateUserInput } from '@app/common/types/graphql';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { USERS_SERVICE } from '../constants/services';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(@Inject(USERS_SERVICE) private usersClient: ClientProxy) {}

  create(createUserInput: CreateUserInput) {
    this.logger.log(createUserInput, 'This action adds a new user');
    return this.usersClient.send('create_user', createUserInput);
  }

  findAll() {
    this.logger.log('This action returns all user');
    return `This action returns all user`;
  }

  findOne(id: number) {
    this.logger.log(`This action returns a #${id} user`);
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    this.logger.log(updateUserInput, `This action updates a #${id} user`);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.logger.log(`This action removes a #${id} user`);
    return `This action removes a #${id} user`;
  }
}
