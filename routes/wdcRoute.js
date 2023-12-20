const express = require('express');
const router = express.Router();

const WdcRoutes = require('../controllers/wdcController.js');

router.get("/", WdcRoutes.getWdcAll)

router.post('/', WdcRoutes.postWdc);

module.exports = router;