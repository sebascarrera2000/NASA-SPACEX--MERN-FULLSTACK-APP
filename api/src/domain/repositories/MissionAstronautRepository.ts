import { MissionAstronaut } from '../models/MissionAstronaut';
/* The code is defining an interface called `MissionAstronautRepository`. This interface specifies the
methods that a class implementing it should have. */

export interface MissionAstronautRepository {
  create(assignment: MissionAstronaut): Promise<MissionAstronaut>;
  deleteByMissionAndAstronaut(missionId: string, astronautId: string): Promise<boolean>;
  getMissionsByAstronautId(astronautId: string): Promise<MissionAstronaut[]>;
  getAstronautsByMissionId(missionId: string): Promise<MissionAstronaut[]>;
  deleteByAstronautId(astronautId: string): Promise<boolean>;
  deleteByMissionId(missionId: string): Promise<boolean>;
}
