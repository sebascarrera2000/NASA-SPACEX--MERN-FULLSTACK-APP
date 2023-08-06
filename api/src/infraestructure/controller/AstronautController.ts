import { Request, Response } from 'express';
import { AstronautRepository } from '../../domain/repositories/AstronautRepository';
import { Astronaut } from '../../domain/models/Astronaut';

/* The AstronautController class is responsible for handling requests related to astronauts, including
creating, retrieving, updating, and deleting astronauts.  Principio de responsabilidad única (SRP):*/

export class AstronautController {
  constructor(private astronautRepository: AstronautRepository) {}

  async createAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const astronautData: Astronaut = req.body;
      const createdAstronaut = await this.astronautRepository.create(astronautData);
      const response = {
        message: 'Astronauta creado exitosamente! 👨‍🚀',
        astronaut: createdAstronaut,
      };
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAstronautById(req: Request, res: Response): Promise<void> {
    try {
      const astronautId: string = req.params.id;
      const astronaut = await this.astronautRepository.getById(astronautId);
      if (astronaut) {
        res.status(200).json(astronaut);
      } else {
        res.status(404).json({ error: 'Astronaut not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAllAstronauts(req: Request, res: Response): Promise<void> {
    try {
      const astronauts = await this.astronautRepository.getAll();
      res.status(200).json(astronauts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const astronautId: string = req.params.id;
      const astronautData: Astronaut = req.body;
      const updatedAstronaut = await this.astronautRepository.update(astronautId, astronautData);
      if (updatedAstronaut) {
        res.status(200).json(updatedAstronaut);
      } else {
        res.status(404).json({ error: 'Astronaut not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const astronautId: string = req.params.id;
      const deleted = await this.astronautRepository.delete(astronautId);
      if (deleted) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: 'Astronaut not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
