"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Leaderboard_1 = require("../models/Leaderboard");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const entries = await Leaderboard_1.Leaderboard.find().sort({ score: -1 });
    res.json(entries);
});
router.post('/', async (req, res) => {
    const entry = new Leaderboard_1.Leaderboard(req.body);
    await entry.save();
    res.status(201).json(entry);
});
exports.default = router;
