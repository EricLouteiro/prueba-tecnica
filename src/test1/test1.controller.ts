import { Body, Controller, Post, Request } from '@nestjs/common';
import { Test1Dto } from './dto/create-test1.dto';
import { Test1Service } from './test1.service';

@Controller('test1')
export class Test1Controller {
  constructor(private readonly test1Service: Test1Service) {}

  @Post()
  create(@Body() test1Dto: Test1Dto) {
    console.log(test1Dto);
    return this.test1Service.create(test1Dto);
  }
}
