const express = require('express');
const router = express.Router();
const wdcController = require('../controllers/wdcController');

router.get('/get-all-wdcs', wdcController.getAllWDCs);

module.exports = router;