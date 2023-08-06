import express from 'express';
import { MissionAstronautController } from '../../../infraestructure/controller/MissionAstronautController';

/* This code is defining a function called `configureMissionAstronautRoutes` that takes a
`MissionAstronautController` as a parameter and returns an instance of an Express router. */

const router = express.Router();
export const configureMissionAstronautRoutes = (controller: MissionAstronautController): express.Router => {
  router.post('/', controller.assignMissionToAstronaut.bind(controller));
  router.delete('/:missionId/:astronautId', controller.unassignMissionFromAstronaut.bind(controller));
  router.get('/astronaut/:astronautId', controller.getMissionsByAstronaut.bind(controller));
  router.get('/mission/:missionId', controller.getAstronautsByMission.bind(controller));
  router.delete('/astronaut/:astronautId', controller.unassignMissionsFromAstronaut.bind(controller));
  router.delete('/mission/:missionId', controller.unassignAstronautsFromMission.bind(controller));

  return router;
};