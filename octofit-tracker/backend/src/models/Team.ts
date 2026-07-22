import mongoose, { Schema, type Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: string[];
  goal: string;
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true },
    members: [{ type: String }],
    goal: { type: String, default: 'Build consistency' },
  },
  { timestamps: true },
);

export const Team = mongoose.model<ITeam>('Team', teamSchema);
