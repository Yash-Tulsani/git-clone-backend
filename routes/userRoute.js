const express = require('express');
const router = express.Router();
const {test} = require('../controllers/userController');
const fpo = require('../controllers/userController')

router.get('/', test);

router.post('/fpo-create', fpo.createFPO)

router.get('/getIds', fpo.getIds)

module.exports = router;