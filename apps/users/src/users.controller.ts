import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { CreateUserInput } from 'src/types/graphql';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly rmqService: RmqService,
  ) {}

  @MessagePattern('create_user')
  async handleCreateUser(
    @Payload() data: CreateUserInput,
    @Ctx() context: RmqContext,
  ) {
    this.rmqService.ack(context);
    return await this.usersService.createUser(data);
  }

  @EventPattern('test_event')
  async handleTestEvent(@Payload() data: any, @Ctx() context: RmqContext) {
    this.usersService.testMethod(data);
    this.rmqService.ack(context);
  }
}
