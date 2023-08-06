import { Mission } from '../../domain/models/Missions';
import { MissionRepository } from '../../domain/repositories/MissionRepository';
import { MissionModel } from '../db/mongoose';

/* The `MongoMissionRepository` class is an implementation of the `MissionRepository` interface that
interacts with a MongoDB database. */

export class MongoMissionRepository implements MissionRepository {
  async create(mission: Mission): Promise<Mission> {
    const createdMission = await MissionModel.create(mission);
    return createdMission.toObject();
  }

  async getById(id: string): Promise<Mission | null> {
    const mission = await MissionModel.findById(id);
    return mission ? mission.toObject() : null;
  }

  async getAll(): Promise<Mission[]> {
    const missions = await MissionModel.find();
    return missions.map((mission) => mission.toObject());
  }

  async update(id: string, mission: Mission): Promise<Mission | null> {
    const updatedMission = await MissionModel.findByIdAndUpdate(id, mission, { new: true });
    return updatedMission ? updatedMission.toObject() : null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await MissionModel.findByIdAndDelete(id);
    return !!result;
  }
}
