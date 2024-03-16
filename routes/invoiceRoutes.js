const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');


router.get('/', invoiceController.getInvoices);
router.get('/:id', invoiceController.getInvoice);
router.post('/:id', invoiceController.updateInvoice);

module.exports = router;