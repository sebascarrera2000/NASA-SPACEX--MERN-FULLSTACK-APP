
import express from 'express';
import { MissionController } from '../../../infraestructure/controller/MissionController';


/* The code is defining a function called `configureMissionRoutes` that takes a `MissionController` as
a parameter and returns an instance of an Express router. */

const router = express.Router();

export const configureMissionRoutes = (controller: MissionController): express.Router => {
  router.post('/', controller.createMission.bind(controller));
  router.get('/:id', controller.getMissionById.bind(controller));
  router.get('/', controller.getAllMissions.bind(controller));
  router.put('/:id', controller.updateMission.bind(controller));
  router.delete('/:id', controller.deleteMission.bind(controller));
  
  return router;
};
