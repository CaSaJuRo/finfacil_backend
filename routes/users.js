const express = require('express');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

const users = [
    { id: 1, email: "user@example.com" },
    { id: 2, email: "admin@example.com" }
];

router.get('/', verifyToken, (req, res) => {
    res.json(users);
});

module.exports = router;