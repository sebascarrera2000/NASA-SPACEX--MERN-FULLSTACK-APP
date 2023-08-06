import { Astronaut } from '../models/Astronaut';

/* The code is defining an interface called `AstronautRepository`. This interface specifies the methods
that a class implementing it should have. */

export interface AstronautRepository {
  create(astronaut: Astronaut): Promise<Astronaut>;
  getById(id: string): Promise<Astronaut | null>;
  getAll(): Promise<Astronaut[]>;
  update(id: string, astronaut: Astronaut): Promise<Astronaut | null>;
  delete(id: string): Promise<boolean>;
}
