import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateTest2Dto {
  @IsArray()
  @IsNotEmpty()
  arrData: number[][];
}
