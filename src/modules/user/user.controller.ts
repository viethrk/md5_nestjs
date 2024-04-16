import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/core/dto/user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialization.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
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
