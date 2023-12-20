const express = require('express');
const router = express.Router();
const chartControllers = require('../controllers/chartController');

//Charts for month wise amount for :year
router.get("/yearChart/:year", chartControllers.yearlyChart)

//Charts for Each District Of that :state and :year
router.get("/districtChart/:state/:year", chartControllers.districtChart)

//Charts for State Wise of that :year
router.get("/stateChart/:year", chartControllers.stateChart)

module.exports = router;