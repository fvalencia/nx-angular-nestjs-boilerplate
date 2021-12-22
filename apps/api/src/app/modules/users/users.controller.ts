import { Controller, Get, Inject } from '@nestjs/common';

import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService)
    private usersService: UsersService
  ) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
