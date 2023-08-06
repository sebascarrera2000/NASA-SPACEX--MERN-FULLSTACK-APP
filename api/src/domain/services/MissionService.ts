import { Mission } from '../models/Missions';
import { MissionRepository } from '../repositories/MissionRepository';

export class MissionService {
  constructor(private missionRepository: MissionRepository) {}

  createMission(mission: Mission): Promise<Mission> {
    return this.missionRepository.create(mission);
  }

  getMissionById(id: string): Promise<Mission | null> {
    return this.missionRepository.getById(id);
  }

  getAllMissions(): Promise<Mission[]> {
    return this.missionRepository.getAll();
  }

  updateMission(id: string, mission: Mission): Promise<Mission | null> {
    return this.missionRepository.update(id, mission);
  }

  deleteMission(id: string): Promise<boolean> {
    return this.missionRepository.delete(id);
  }
}
