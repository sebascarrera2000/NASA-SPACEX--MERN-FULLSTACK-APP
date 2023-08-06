/* The AstronautsUseCase class provides methods for creating, retrieving, updating, and deleting
astronauts using the AstronautService. */
import { Astronaut } from '../domain/models/Astronaut';
import { AstronautService } from '../domain/services/AstronautService';

export class AstronautsUseCase {
  constructor(private astronautService: AstronautService) {}

  async createAstronaut(astronaut: Astronaut): Promise<Astronaut> {
    return this.astronautService.createAstronaut(astronaut);
  }

  async getAstronautById(id: string): Promise<Astronaut | null> {
    return this.astronautService.getAstronautById(id);
  }

  async getAllAstronauts(): Promise<Astronaut[]> {
    return this.astronautService.getAllAstronauts();
  }

  async updateAstronaut(id: string, astronaut: Astronaut): Promise<Astronaut | null> {
    return this.astronautService.updateAstronaut(id, astronaut);
  }

  async deleteAstronaut(id: string): Promise<boolean> {
    return this.astronautService.deleteAstronaut(id);
  }
}
