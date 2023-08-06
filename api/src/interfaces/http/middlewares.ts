import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { MissionValidator } from './validators/MissionValidator';
import { MissionAstronautValidator } from './validators/MissionAstronautValidator';
import { AstronautValidator } from './validators/AstronautValidator';

/**
 * The code defines three middleware functions for validating astronaut, mission, and mission astronaut
 * data.
 * @param {Request} req - The `req` parameter represents the HTTP request object, which contains
 * information about the incoming request such as headers, query parameters, and request body.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties for manipulating the response, such as
 * setting the status code, headers, and sending the response body.
 * @param {NextFunction} next - The `next` parameter is a function that is called to pass control to
 * the next middleware function in the chain. It is typically used to move to the next middleware
 * function after the current middleware function has completed its tasks.
 * @returns In each middleware function, if there are validation errors, a response with status code
 * 400 and an object containing the errors is returned. Otherwise, the `next()` function is called to
 * proceed to the next middleware or route handler.
 */
export const astronautValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const astronautValidator = new AstronautValidator();
  astronautValidator.name = req.body.name;
  astronautValidator.nationality = req.body.nationality;
  astronautValidator.age = req.body.age;

  const errors = await validate(astronautValidator);
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }

  next();
};

export const missionValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const missionValidator = new MissionValidator();
  missionValidator.name = req.body.name;
  missionValidator.launchDate = req.body.launchDate;
  missionValidator.destination = req.body.destination;

  const errors = await validate(missionValidator);
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }

  next();
};

export const missionAstronautValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const missionAstronautValidator = new MissionAstronautValidator();
  missionAstronautValidator.missionId = req.body.missionId;
  missionAstronautValidator.astronautId = req.body.astronautId;

  const errors = await validate(missionAstronautValidator);
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  }

  next();
};
