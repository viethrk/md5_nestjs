import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { DecoratorController } from './decorator/decorator.controller';
import { DecoratorService } from './decorator/decorator.service';

@Module({
  imports: [UserModule, BookModule],
  controllers: [AppController, DecoratorController],
  providers: [AppService, DecoratorService],
})
export class AppModule {}
