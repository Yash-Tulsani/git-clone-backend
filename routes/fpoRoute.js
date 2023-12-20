const express = require('express');
const router = express.Router();
const fpoControllers = require('../controllers/fpoController');

router.post("/joinFpo", fpoControllers.joinFpo)

module.exports = router;