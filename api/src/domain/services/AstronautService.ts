/* The AstronautService class provides methods for creating, retrieving, updating, and deleting
astronauts using an AstronautRepository.  */

import { Astronaut } from '../models/Astronaut';
import { AstronautRepository } from '../repositories/AstronautRepository';

export class AstronautService {
  constructor(private astronautRepository: AstronautRepository) {}

  createAstronaut(astronaut: Astronaut): Promise<Astronaut> {
    return this.astronautRepository.create(astronaut);
  }

  getAstronautById(id: string): Promise<Astronaut | null> {
    return this.astronautRepository.getById(id);
  }

  getAllAstronauts(): Promise<Astronaut[]> {
    return this.astronautRepository.getAll();
  }

  updateAstronaut(id: string, astronaut: Astronaut): Promise<Astronaut | null> {
    return this.astronautRepository.update(id, astronaut);
  }

  deleteAstronaut(id: string): Promise<boolean> {
    return this.astronautRepository.delete(id);
  }
}
