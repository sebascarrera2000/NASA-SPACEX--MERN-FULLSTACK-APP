import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class MissionAstronautValidator {
  @IsNotEmpty()
  @IsString()
  missionId: string;

  @IsNotEmpty()
  @IsNumber()
  astronautId: number;
}
