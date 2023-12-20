const express = require('express');
const router = express.Router();

const WdcRoutes = require('../controllers/wdcController.js');

router.get("/", WdcRoutes.getWdcAll)

router.post('/', WdcRoutes.postWdc);
// const wdcController = require('../controllers/wdcController');

router.get('/get-all-wdcs', WdcRoutes.getAllWDCs);

module.exports = router;