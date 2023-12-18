const express = require('express');
const router = express.Router();
const ServiceRoutes = require('../controllers/serviceController.js');

router.get('/:id', ServiceRoutes.getServiceById);

module.exports = router;