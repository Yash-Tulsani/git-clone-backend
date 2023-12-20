const express = require('express');
const router = express.Router();
const {test} = require('../controllers/userController');
const fpo = require('../controllers/userController');
const verifyToken = require('../utils/verifyToken');
const deleteUser = require('../controllers/userController');

router.get('/', test);

router.post('/fpo-create', fpo.createFPO)  

router.get('/getIds', fpo.getIds);

router.get('/getUser/:user_id', fpo.getUserById)

router.delete('/delete/:id', verifyToken, deleteUser.deleteUser);

module.exports = router;