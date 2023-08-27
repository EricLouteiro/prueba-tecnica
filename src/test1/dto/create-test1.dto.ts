import { Contains, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { IsValidBracketString } from '../../string-validator/string-validator.decorator';

export class Test1Dto {
  @IsString()
  @IsNotEmpty()
  @IsValidBracketString()
  inputData: String;
}
