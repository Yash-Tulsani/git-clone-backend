const express = require('express');
const router = express.Router();
const TransactionRoutes = require('../controllers/transactionController.js');

router.get('/:user_id', TransactionRoutes.getTransactionHistory);

router.post('/', TransactionRoutes.postTransactionDone);


module.exports = router;