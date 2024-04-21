const express = require('express');
const router = express.Router();

const WdcRoutes = require('../controllers/wdcController.js');

router.get("/", WdcRoutes.getWdcAll)

router.post('/', WdcRoutes.postWdc);

router.get('/get-all-wdcs', WdcRoutes.getAllWDCs);
router.get('/get-all-wdcs-with-populate', WdcRoutes.getAllWDCsWithPopulate);

module.exports = router;