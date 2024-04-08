import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/core/dto/user.dto';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    return await this.userService.findAll();
  }

  @Post()
  async createUser(@Body() body: UserDto) {
    return await this.userService.createUser(body);
  }
}
