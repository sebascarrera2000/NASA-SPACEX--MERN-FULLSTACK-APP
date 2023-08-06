import { AstronautRepository } from './../../domain/repositories/AstronautRepository';
import { Astronaut } from '../../domain/models/Astronaut';
import { AstronautModel } from '../db/mongoose';

/* The `MongoAstronautRepository` class is an implementation of the `AstronautRepository` interface
that interacts with a MongoDB database to perform CRUD operations on astronaut data. */

export class MongoAstronautRepository implements AstronautRepository {
  async create(astronaut: Astronaut): Promise<Astronaut> {
    try {
      const newAstronaut = new AstronautModel(astronaut);
      const savedAstronaut = await newAstronaut.save();
      return savedAstronaut;
    } catch (error) {
      throw new Error('Error creating astronaut');
    }
  }

  async getById(id: string): Promise<Astronaut | null> {
    try {
      const astronaut = await AstronautModel.findById(id);
      return astronaut;
    } catch (error) {
      throw new Error('Error fetching astronaut by ID');
    }
  }

  async getAll(): Promise<Astronaut[]> {
    try {
      const astronauts = await AstronautModel.find();
      return astronauts;
    } catch (error) {
      throw new Error('Error fetching all astronauts');
    }
  }

  async update(id: string, astronaut: Astronaut): Promise<Astronaut | null> {
    try {
      const updatedAstronaut = await AstronautModel.findByIdAndUpdate(id, astronaut, { new: true });
      return updatedAstronaut;
    } catch (error) {
      throw new Error('Error updating astronaut');
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const result = await AstronautModel.findByIdAndDelete(id);
      return !!result;
    } catch (error) {
      throw new Error('Error deleting astronaut');
    }
  }
}
