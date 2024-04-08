import { Module } from '@nestjs/common';
import { MessageModule } from '../message/message.module';
import { MessageService } from '../message/message.service';

@Module({
  imports: [MessageModule],
  providers: [MessageService],
})
export class BookModule {}
