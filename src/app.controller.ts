import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: '/api/v1/controller' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body('description') description: any) {
    return {
      name: 'post controller',
      description,
    };
  }

  @Delete()
  delHello(): string {
    return this.appService.getHello();
  }
}
