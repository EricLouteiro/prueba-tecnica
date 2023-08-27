import { Injectable } from '@nestjs/common';
import { Test1Dto } from './dto/create-test1.dto';
import { balancedGroupSymbols } from 'src/helpers';

@Injectable()
export class Test1Service {
  create(Test1Dto: Test1Dto) {
    return balancedGroupSymbols(Test1Dto);
  }
}
