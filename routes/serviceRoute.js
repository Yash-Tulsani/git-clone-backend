const express = require('express');
const router = express.Router();
const ServiceRoutes = require('../controllers/serviceController.js');

router.get('/:id', ServiceRoutes.getServiceById);

router.get('/', ServiceRoutes.getServices)
router.get('/get-all-services/:limit', ServiceRoutes.getAllServices);

module.exports = router;