const express = require('express');
const router = express.Router();
const chatControllers = require('../controllers/chatControllers');

router.post("/chat/reply", chatControllers.getMessageReply)

module.exports = router;