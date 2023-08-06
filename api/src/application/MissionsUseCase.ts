/* The MissionsUseCase class provides methods for creating, retrieving, updating, and deleting missions
using the MissionService. */
import { Mission } from '../domain/models/Missions';
import { MissionService } from '../domain/services/MissionService';

export class MissionsUseCase {
  constructor(private missionService: MissionService) {}

  async createMission(mission: Mission): Promise<Mission> {
    return this.missionService.createMission(mission);
  }

  async getMissionById(id: string): Promise<Mission | null> {
    return this.missionService.getMissionById(id);
  }

  async getAllMissions(): Promise<Mission[]> {
    return this.missionService.getAllMissions();
  }

  async updateMission(id: string, mission: Mission): Promise<Mission | null> {
    return this.missionService.updateMission(id, mission);
  }

  async deleteMission(id: string): Promise<boolean> {
    return this.missionService.deleteMission(id);
  }
}
