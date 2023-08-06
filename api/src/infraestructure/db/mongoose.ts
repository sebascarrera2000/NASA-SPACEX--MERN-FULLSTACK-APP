import mongoose, { Document, Model, Schema } from 'mongoose';
import { Astronaut } from '../../domain/models/Astronaut';
import { Mission } from '../../domain/models/Missions';
import { MissionAstronaut } from '../../domain/models/MissionAstronaut';

/*Patrón de singleton (Singleton Pattern): usarlo para mantener una única instancia de la conexión a la base de datos en la clase */

/* The code block is defining a Mongoose schema for the Astronaut model. It specifies the structure and
data types of the Astronaut document in the MongoDB collection. */
const astronautSchema = new mongoose.Schema<Astronaut>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
});


export const AstronautModel: Model<Document & Astronaut> = mongoose.model<Document & Astronaut>('Astronaut', astronautSchema);


/* The code block is defining a Mongoose schema for the Mission model. It specifies the structure and
data types of the Mission document in the MongoDB collection. */
const missionSchema = new Schema<Mission>({
  name: { type: String, required: true },
  launchDate: { type: Date, required: true },
  destination: { type: String, required: true },
});


export const MissionModel: Model<Document & Mission> = mongoose.model<Document & Mission>('Mission', missionSchema);


/* The code block is defining a Mongoose schema for the `MissionAstronaut` model. It specifies the
structure and data types of the `MissionAstronaut` document in the MongoDB collection. */
const missionAstronautSchema = new Schema<MissionAstronaut>({
  missionId: [{ type: Schema.Types.ObjectId, ref: 'Mission' , required: true}],
  astronautId: [{ type: Schema.Types.ObjectId, ref: 'Astronaut' , required: true}],
});
export const MissionAstronautModel: Model<Document & MissionAstronaut> = mongoose.model<Document & MissionAstronaut>('MissionAstronaut', missionAstronautSchema);


/* The code block is defining a MongoDB connection URI and a function called `connectToDatabase`. */

const MONGODB_URI = 'mongodb://db/nasa';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};