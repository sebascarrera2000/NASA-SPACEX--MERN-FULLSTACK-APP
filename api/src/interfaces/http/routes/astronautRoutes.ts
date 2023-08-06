import express from 'express';
import { AstronautController } from '../../../infraestructure/controller/AstronautController';


/* This code is defining a function called `configureAstronautRoutes` that takes a `controller`
parameter of type `AstronautController`. */

const router = express.Router();

export const configureAstronautRoutes = (controller: AstronautController): express.Router => {
  router.post('/', controller.createAstronaut.bind(controller));
  router.get('/:id', controller.getAstronautById.bind(controller));
  router.get('/', controller.getAllAstronauts.bind(controller));
  router.put('/:id', controller.updateAstronaut.bind(controller));
  router.delete('/:id', controller.deleteAstronaut.bind(controller));
  
  return router;
};
