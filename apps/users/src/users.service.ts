import { PrismaRepository } from '@app/common';
import { InjectRepository } from '@app/common/database/inject-repository.decorator';
import { CreateUserInput } from '@app/common/types/graphql';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository('user')
    private readonly postRepo: PrismaRepository['user'],
  ) {}

  async createUser({
    email,
    firstname,
    lastname,
    password,
    phone,
  }: CreateUserInput) {
    return this.postRepo.create({
      data: { email, firstname, lastname, password, phone },
    });
  }

  async testMethod(data: any) {
    this.logger.log(data);
  }
}
