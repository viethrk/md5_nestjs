import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('/api/v1/decorator')
export class DecoratorController {
  @Get('/query')
  getAllQuery(@Query() query: any) {
    console.log(query);

    return {
      name: 'decoretor controller',
      ...query,
    };
  }

  @Get('/query-name')
  getQueryName(@Query('nameQuery') nameQuery: any) {
    return {
      name: 'decoretor controller',
      nameQuery,
    };
  }

  @Get('/params/:id/:des')
  getAllParams(@Param() params: any) {
    return {
      name: 'decoretor controller',
      ...params,
    };
  }

  @Get('/params-name/:id/:des')
  getParamsName(@Param('des') des: any) {
    return {
      name: 'decoretor controller',
      des,
    };
  }

  @Post('/body')
  postBody(@Body() body: any) {
    return {
      name: 'decoretor controller',
      ...body,
    };
  }

  @Post('/body-name')
  postBodyName(@Body('description') description: any) {
    return {
      name: 'decoretor controller',
      description,
    };
  }
}
