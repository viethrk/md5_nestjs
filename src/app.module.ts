import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValidateModule } from './modules/validate/validate.module';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { DecoratorController } from './modules/decorator/decorator.controller';
import { DecoratorService } from './modules/decorator/decorator.service';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [UserModule, BookModule, ValidateModule, MessageModule],
  controllers: [AppController, DecoratorController],
  providers: [AppService, DecoratorService],
})
export class AppModule {}
