"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = require("../models/Team");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const teams = await Team_1.Team.find();
    res.json(teams);
});
router.post('/', async (req, res) => {
    const team = new Team_1.Team(req.body);
    await team.save();
    res.status(201).json(team);
});
exports.default = router;
