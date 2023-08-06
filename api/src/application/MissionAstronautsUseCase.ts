/* The MissionAstronautsUseCase class is responsible for handling the assignment and retrieval of
missions and astronauts. */

import { MissionAstronautRepository } from './../domain/repositories/MissionAstronautRepository';
import { MissionAstronaut } from '../domain/models/MissionAstronaut';

export class MissionAstronautsUseCase {
  constructor(private missionAstronautRepository: MissionAstronautRepository) {}

  async assignMissionToAstronaut(missionId: string, astronautId: string): Promise<MissionAstronaut> {
    try {
      const assignment: MissionAstronaut = {
        missionId,
        astronautId,
      };
      const assignedMission = await this.missionAstronautRepository.create(assignment);
      return assignedMission;
    } catch (error) {
      throw new Error('Failed to assign mission to astronaut');
    }
  }

  async unassignMissionFromAstronaut(missionId: string, astronautId: string): Promise<boolean> {
    try {
      const unassigned = await this.missionAstronautRepository.deleteByMissionAndAstronaut(missionId, astronautId);
      return unassigned;
    } catch (error) {
      throw new Error('Failed to unassign mission from astronaut');
    }
  }

  async getMissionsByAstronaut(astronautId: string): Promise<string[]> {
    try {
      const missions = await this.missionAstronautRepository.getMissionsByAstronautId(astronautId);
      return missions.map((assignment) => assignment.missionId);
    } catch (error) {
      throw new Error('Failed to retrieve missions by astronaut');
    }
  }

  async getAstronautsByMission(missionId: string): Promise<string[]> {
    try {
      const astronauts = await this.missionAstronautRepository.getAstronautsByMissionId(missionId);
      return astronauts.map((assignment) => assignment.astronautId);
    } catch (error) {
      throw new Error('Failed to retrieve astronauts by mission');
    }
  }

  async unassignMissionsFromAstronaut(astronautId: string): Promise<boolean> {
    try {
      const unassigned = await this.missionAstronautRepository.deleteByAstronautId(astronautId);
      return unassigned;
    } catch (error) {
      throw new Error('Failed to unassign missions from astronaut');
    }
  }

  async unassignAstronautsFromMission(missionId: string): Promise<boolean> {
    try {
      const unassigned = await this.missionAstronautRepository.deleteByMissionId(missionId);
      return unassigned;
    } catch (error) {
      throw new Error('Failed to unassign astronauts from mission');
    }
  }
}
