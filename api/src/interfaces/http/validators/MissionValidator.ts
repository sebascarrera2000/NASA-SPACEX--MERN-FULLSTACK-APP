import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class MissionValidator {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  launchDate: Date;

  @IsNotEmpty()
  @IsString()
  destination: string;
}
