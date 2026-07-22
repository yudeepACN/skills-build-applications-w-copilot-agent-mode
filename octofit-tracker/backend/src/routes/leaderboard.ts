import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await Leaderboard.find().sort({ score: -1 });
  res.json(entries);
});

router.post('/', async (req, res) => {
  const entry = new Leaderboard(req.body);
  await entry.save();
  res.status(201).json(entry);
});

export default router;
