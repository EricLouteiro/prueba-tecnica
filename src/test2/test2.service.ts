import { Injectable } from '@nestjs/common';
import { CreateTest2Dto } from './dto/create-test2.dto';
import { snailRearrangement } from 'src/helpers';

@Injectable()
export class Test2Service {
  create(createTest2Dto: CreateTest2Dto) {
    return snailRearrangement(createTest2Dto);
  }
}
