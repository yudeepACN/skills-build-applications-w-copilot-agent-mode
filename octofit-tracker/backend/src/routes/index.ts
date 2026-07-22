import { Router } from 'express';
import userRoutes from './users';
import teamRoutes from './teams';
import activityRoutes from './activities';
import leaderboardRoutes from './leaderboard';
import workoutRoutes from './workouts';

const router = Router();

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/activities', activityRoutes);
router.use('/leaderboard', leaderboardRoutes);
router.use('/workouts', workoutRoutes);

export default router;
