import { AstronautController } from './../../../infraestructure/controller/AstronautController';
import express from 'express';
import { configureAstronautRoutes } from './astronautRoutes';
import { configureMissionRoutes } from './missionRoutes';
import { configureMissionAstronautRoutes } from './missionAstronautRoutes';
import { MissionController } from '../../../infraestructure/controller/MissionController';
import { MissionAstronautController } from '../../../infraestructure/controller/MissionAstronautController';
/**
 * The `configureRoutes` function sets up the routes for the astronaut, mission, and missionAstronaut
 * controllers in an Express application.
 * @param app - The `app` parameter is an instance of the `express.Application` class. It represents
 * the Express application that the routes will be configured on.
 * @param {AstronautController} astronautController - An instance of the AstronautController class,
 * which is responsible for handling requests related to astronauts.
 * @param {MissionController} missionController - The `missionController` parameter is an instance of
 * the `MissionController` class. It is responsible for handling requests related to missions, such as
 * creating a new mission, retrieving mission details, updating mission information, and deleting
 * missions.
 * @param {MissionAstronautController} missionAstronautController - The `missionAstronautController`
 * parameter is an instance of the `MissionAstronautController` class. It is responsible for handling
 * requests related to the mission astronauts, such as creating, updating, and deleting mission
 * astronauts.
 */

export const configureRoutes = (app: express.Application, astronautController: AstronautController, missionController: MissionController, missionAstronautController: MissionAstronautController): void => {
  const astronautRoutes = configureAstronautRoutes(astronautController);
  app.use('/api/astronauts', astronautRoutes);

  const missionRoutes = configureMissionRoutes(missionController);
  app.use('/api/missions', missionRoutes);

  const missionAstronautRoutes = configureMissionAstronautRoutes(missionAstronautController);
  app.use('/api/missionastronauts', missionAstronautRoutes);
};
