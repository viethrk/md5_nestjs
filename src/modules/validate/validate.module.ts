import { Module } from '@nestjs/common';
import { ValidateController } from './validate.controller';

@Module({
  controllers: [ValidateController]
})
export class ValidateModule {}
