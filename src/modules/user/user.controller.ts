import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/core/dto/user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialization.interceptor';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Get()
  async getUser() {
    const users = await this.userService.findAll();

    return users;
  }

  @Post()
  async createUser(@Body() body: UserDto) {
    return await this.userService.createUser(body);
  }
}
