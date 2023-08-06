import { MissionAstronaut } from './../../domain/models/MissionAstronaut';
import { MissionAstronautModel } from './../db/mongoose';
import { MissionAstronautRepository } from '../../domain/repositories/MissionAstronautRepository';


/* The `MongoMissionAstronautRepository` class is an implementation of the `MissionAstronautRepository`
interface that interacts with a MongoDB database to perform CRUD operations on mission astronaut
assignments. */

export class MongoMissionAstronautRepository implements MissionAstronautRepository {
  async create(assignment: MissionAstronaut): Promise<MissionAstronaut> {
    const createdAssignment = await MissionAstronautModel.create(assignment);
    return createdAssignment;
  }

  async deleteByMissionAndAstronaut(missionId: string, astronautId: string): Promise<boolean> {
    const result = await MissionAstronautModel.deleteOne({ missionId, astronautId });
    return result.deletedCount !== 0;
  }

  async getMissionsByAstronautId(astronautId: string): Promise<MissionAstronaut[]> {
    const assignments = await MissionAstronautModel.find({ astronautId });
    return assignments;
  }

  async getAstronautsByMissionId(missionId: string): Promise<MissionAstronaut[]> {
    const assignments = await MissionAstronautModel.find({ missionId });
    return assignments;
  }

  async deleteByAstronautId(astronautId: string): Promise<boolean> {
    const result = await MissionAstronautModel.deleteMany({ astronautId });
    return result.deletedCount !== 0;
  }

  async deleteByMissionId(missionId: string): Promise<boolean> {
    const result = await MissionAstronautModel.deleteMany({ missionId });
    return result.deletedCount !== 0;
  }
}
