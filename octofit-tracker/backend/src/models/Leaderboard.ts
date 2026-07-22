import mongoose, { Schema, type Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userId: string;
  score: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 },
    rank: { type: Number, default: 1 },
  },
  { timestamps: true },
);

export const Leaderboard = mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
