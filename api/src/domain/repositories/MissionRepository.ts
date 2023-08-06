import { Mission } from '../models/Missions';

/* The code is defining an interface called `MissionRepository`. This interface specifies the methods
that a mission repository should have. */
export interface MissionRepository {
  create(mission: Mission): Promise<Mission>;
  getById(id: string): Promise<Mission | null>;
  getAll(): Promise<Mission[]>;
  update(id: string, mission: Mission): Promise<Mission | null>;
  delete(id: string): Promise<boolean>;
}
