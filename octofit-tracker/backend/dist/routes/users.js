"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await User_1.User.find();
    res.json(users);
});
router.post('/', async (req, res) => {
    const user = new User_1.User(req.body);
    await user.save();
    res.status(201).json(user);
});
exports.default = router;
