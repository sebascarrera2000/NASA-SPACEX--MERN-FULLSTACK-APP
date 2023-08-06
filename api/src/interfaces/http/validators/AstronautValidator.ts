import { IsNotEmpty, IsString,  IsNumber } from 'class-validator';

export class AstronautValidator {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
