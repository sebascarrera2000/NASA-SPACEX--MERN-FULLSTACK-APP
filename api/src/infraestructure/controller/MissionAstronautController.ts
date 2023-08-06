import { Request, Response } from 'express';
import { MissionAstronautService } from '../../domain/services/MissionAstronautService';

/* The MissionAstronautController class handles requests related to assigning and unassigning missions
to astronauts. Principio de responsabilidad única (SRP) */


export class MissionAstronautController {
  constructor(private missionAstronautService: MissionAstronautService) {}

  async assignMissionToAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const { missionId, astronautId } = req.body;
      await this.missionAstronautService.assignMissionToAstronaut(missionId, astronautId);
      res.status(201).json({ message: 'Mission assigned to astronaut successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to assign mission to astronaut' });
    }
  }

  async unassignMissionFromAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const { missionId, astronautId } = req.params;
      await this.missionAstronautService.unassignMissionFromAstronaut(missionId, astronautId);
      res.status(200).json({ message: 'Mission unassigned from astronaut successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to unassign mission from astronaut' });
    }
  }

  async getMissionsByAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const { astronautId } = req.params;
      const missions = await this.missionAstronautService.getMissionsByAstronaut(astronautId);
      res.status(200).json(missions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve missions by astronaut' });
    }
  }

  async getAstronautsByMission(req: Request, res: Response): Promise<void> {
    try {
      const { missionId } = req.params;
      const astronauts = await this.missionAstronautService.getAstronautsByMission(missionId);
      res.status(200).json(astronauts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve astronauts by mission' });
    }
  }

  async unassignMissionsFromAstronaut(req: Request, res: Response): Promise<void> {
    try {
      const { astronautId } = req.params;
      await this.missionAstronautService.unassignMissionsFromAstronaut(astronautId);
      res.status(200).json({ message: 'Missions unassigned from astronaut successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to unassign missions from astronaut' });
    }
  }

  async unassignAstronautsFromMission(req: Request, res: Response): Promise<void> {
    try {
      const { missionId } = req.params;
      await this.missionAstronautService.unassignAstronautsFromMission(missionId);
      res.status(200).json({ message: 'Astronauts unassigned from mission successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to unassign astronauts from mission' });
    }
  }
}
