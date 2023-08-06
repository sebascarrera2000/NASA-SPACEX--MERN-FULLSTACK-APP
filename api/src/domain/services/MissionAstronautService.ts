/* The MissionAstronautService class provides methods for assigning and unassigning astronauts to
missions, as well as retrieving missions by astronaut and astronauts by mission. */


import { MissionRepository } from '../repositories/MissionRepository';
import { AstronautRepository } from '../repositories/AstronautRepository';
import { MissionAstronautRepository } from '../repositories/MissionAstronautRepository';

export class MissionAstronautService {
  constructor(
    private missionRepository: MissionRepository,
    private astronautRepository: AstronautRepository,
    private missionAstronautRepository: MissionAstronautRepository
  ) {}

  async assignMissionToAstronaut(missionId: string, astronautId: string): Promise<void> {
    const mission = await this.missionRepository.getById(missionId);
    const astronaut = await this.astronautRepository.getById(astronautId);

    if (!mission || !astronaut) {
      throw new Error('Mision o Astronauta no encontrado ');
    }

    await this.missionAstronautRepository.create({ missionId, astronautId });
  }

  async unassignMissionFromAstronaut(missionId: string, astronautId: string): Promise<void> {
    const unassigned = await this.missionAstronautRepository.deleteByMissionAndAstronaut(missionId, astronautId);

    if (!unassigned) {
      throw new Error('Falla al desasignar de una mission a astronauta 📛 ');
    }
  }

  async getMissionsByAstronaut(astronautId: string): Promise<string[]> {
    const missions = await this.missionAstronautRepository.getMissionsByAstronautId(astronautId);
    return missions.map((assignment) => assignment.missionId);
  }

  async getAstronautsByMission(missionId: string): Promise<string[]> {
    const astronauts = await this.missionAstronautRepository.getAstronautsByMissionId(missionId);
    return astronauts.map((assignment) => assignment.astronautId);
  }

  async unassignMissionsFromAstronaut(astronautId: string): Promise<void> {
    const unassigned = await this.missionAstronautRepository.deleteByAstronautId(astronautId);

    if (!unassigned) {
      throw new Error('Falla al desasignar de una mission a astronauta 📛');
    }
  }

  async unassignAstronautsFromMission(missionId: string): Promise<void> {
    const unassigned = await this.missionAstronautRepository.deleteByMissionId(missionId);

    if (!unassigned) {
      throw new Error('Falla al desasignar un astronauta  a  una mision 📛');
    }
  }
}
