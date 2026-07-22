import mongoose, { Schema, type Document } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  difficulty: string;
  duration: number;
  description?: string;
}

const workoutSchema = new Schema<IWorkout>(
  {
    name: { type: String, required: true, unique: true },
    difficulty: { type: String, default: 'beginner' },
    duration: { type: Number, required: true },
    description: { type: String, default: 'A helpful workout plan' },
  },
  { timestamps: true },
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
