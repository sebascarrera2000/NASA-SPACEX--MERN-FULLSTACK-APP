import { MissionAstronautController } from './infraestructure/controller/MissionAstronautController';
import { config as dotEnvConfig } from 'dotenv';
import { connectToDatabase } from './infraestructure/db/mongoose';
import cors from 'cors';
import compression from 'compression'
import { configureRoutes } from './interfaces/http/routes';
import { AstronautController } from './infraestructure/controller/AstronautController';
import { MissionController } from './infraestructure/controller/MissionController';
import { MongoAstronautRepository } from './infraestructure/repositories/MongoAstronautRepository';
import { MongoMissionRepository } from './infraestructure/repositories/MongoMissionRepository';
import { MissionAstronautService } from './domain/services/MissionAstronautService';
import { MongoMissionAstronautRepository } from './infraestructure/repositories/MongoMissionAstronautRepository';
dotEnvConfig();

import bodyParser from 'body-parser';
import express from 'express';

import { config } from './config';
import { healthRouter } from './health/health-router';


/**
 * The function `boostrap()` sets up and starts a server for a NASA API.
 */
function boostrap() {
  const app = express();

  connectToDatabase();
  app.use(bodyParser.json());
  app.use(compression());
  app.use('/health', healthRouter);

  // Controllers
  const astronautRepository = new MongoAstronautRepository();
  const astronautController = new AstronautController(astronautRepository);

  const missionRepository = new MongoMissionRepository();
  const missionController = new MissionController(missionRepository);


  const missionAstronautRepository = new MongoMissionAstronautRepository();
  const missionAstronautService = new MissionAstronautService(
    missionRepository,
    astronautRepository,
    missionAstronautRepository
  );
  const missionAstronautController = new MissionAstronautController(
    missionAstronautService
  );

  app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),);

  // Routes
  configureRoutes(app, astronautController, missionController, missionAstronautController);


  const { port } = config.server;

  app.listen(port, () => {
    console.log(`Nasa-Api Is ON 🚀  ${port}`);
  });
}

boostrap();
