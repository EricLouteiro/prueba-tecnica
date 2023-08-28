import { IsNumber, IsNotEmpty, IsString, isString } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  description: string;

  @IsString()
  currency: string;
}
