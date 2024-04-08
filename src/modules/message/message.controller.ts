import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { MessageDto } from 'src/core/dto/message.dto ';
import { MessageService } from './message.service';

@Controller('/api/v1/message')
export class MessageController {
  private service: MessageService;

  constructor(service: MessageService) {
    this.service = service;
  }

  @Get()
  getAllMess() {
    return this.service.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    const message = this.service.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  @Post()
  createMessage(@Body() body: MessageDto) {
    return this.service.create(body.content);
  }
}
