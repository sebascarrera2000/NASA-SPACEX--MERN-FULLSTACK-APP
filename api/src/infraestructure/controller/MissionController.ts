import { Request, Response } from 'express';
import { MissionRepository } from '../../domain/repositories/MissionRepository';
import { Mission } from '../../domain/models/Missions';

/* The MissionController class handles CRUD operations for missions using a MissionRepository. Principio de responsabilidad única (SRP) */

export class MissionController {
  constructor(private missionRepository: MissionRepository) {}

  async createMission(req: Request, res: Response): Promise<void> {
    try {
      const missionData: Mission = req.body;
      const createdMission = await this.missionRepository.create(missionData);
      res.status(201).json(createdMission);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getMissionById(req: Request, res: Response): Promise<void> {
    try {
      const missionId: string = req.params.id;
      const mission = await this.missionRepository.getById(missionId);
      if (mission) {
        res.status(200).json(mission);
      } else {
        res.status(404).json({ error: 'Mission not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAllMissions(req: Request, res: Response): Promise<void> {
    try {
      const missions = await this.missionRepository.getAll();
      res.status(200).json(missions);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateMission(req: Request, res: Response): Promise<void> {
    try {
      const missionId: string = req.params.id;
      const missionData: Mission = req.body;
      const updatedMission = await this.missionRepository.update(missionId, missionData);
      if (updatedMission) {
        res.status(200).json(updatedMission);
      } else {
        res.status(404).json({ error: 'Mission not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteMission(req: Request, res: Response): Promise<void> {
    try {
      const missionId: string = req.params.id;
      const deleted = await this.missionRepository.delete(missionId);
      if (deleted) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ error: 'Mission not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
