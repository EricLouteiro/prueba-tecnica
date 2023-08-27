import { Controller, Post, Body } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { CreateTest2Dto } from './dto/create-test2.dto';

@Controller('test2')
export class Test2Controller {
  constructor(private readonly test2Service: Test2Service) {}

  @Post()
  create(@Body() createTest2Dto: CreateTest2Dto) {
    return this.test2Service.create(createTest2Dto);
  }
}
