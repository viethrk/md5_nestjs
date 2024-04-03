import { Body, Controller, Post } from '@nestjs/common';
import { DemoDto } from 'src/core/dto/demo.dto';

@Controller('/api/v1/validate')
export class ValidateController {
  @Post('/demo-validate1')
  demoValidate1(@Body() body: DemoDto) {
    console.log(body);

    return 123;
  }
}
