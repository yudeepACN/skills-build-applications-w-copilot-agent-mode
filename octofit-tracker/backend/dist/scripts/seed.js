"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("../models/User");
const Team_1 = require("../models/Team");
const Activity_1 = require("../models/Activity");
const Leaderboard_1 = require("../models/Leaderboard");
const Workout_1 = require("../models/Workout");
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await User_1.User.deleteMany({});
        await Team_1.Team.deleteMany({});
        await Activity_1.Activity.deleteMany({});
        await Leaderboard_1.Leaderboard.deleteMany({});
        await Workout_1.Workout.deleteMany({});
        const users = await User_1.User.insertMany([
            { name: 'Ava Chen', email: 'ava@example.com', role: 'captain', fitnessGoal: 'Run a 10K' },
            { name: 'Mason Lee', email: 'mason@example.com', role: 'member', fitnessGoal: 'Build strength' },
            { name: 'Sofia Patel', email: 'sofia@example.com', role: 'member', fitnessGoal: 'Improve mobility' },
        ]);
        const teams = await Team_1.Team.insertMany([
            { name: 'Storm Riders', members: [users[0].email, users[1].email], goal: 'Complete 5 team workouts' },
            { name: 'Core Crew', members: [users[2].email], goal: 'Stay consistent this month' },
        ]);
        const activities = await Activity_1.Activity.insertMany([
            { userId: users[0]._id.toString(), type: 'run', duration: 35, date: new Date('2026-07-20') },
            { userId: users[1]._id.toString(), type: 'strength', duration: 45, date: new Date('2026-07-21') },
            { userId: users[2]._id.toString(), type: 'yoga', duration: 30, date: new Date('2026-07-22') },
        ]);
        await Leaderboard_1.Leaderboard.insertMany([
            { userId: users[0]._id.toString(), score: 95, rank: 1 },
            { userId: users[1]._id.toString(), score: 82, rank: 2 },
            { userId: users[2]._id.toString(), score: 78, rank: 3 },
        ]);
        await Workout_1.Workout.insertMany([
            { name: 'Morning Mobility Flow', difficulty: 'beginner', duration: 20, description: 'Gentle stretches and balance work' },
            { name: 'HIIT Cardio Blast', difficulty: 'intermediate', duration: 30, description: 'Short bursts of cardio with recovery intervals' },
            { name: 'Full Body Strength', difficulty: 'advanced', duration: 45, description: 'Squats, presses, lunges, and core' },
        ]);
        console.log('Seeded users:', users.length);
        console.log('Seeded teams:', teams.length);
        console.log('Seeded activities:', activities.length);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
