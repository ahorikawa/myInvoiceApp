const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const User = require('../models/User');


router.get('/', invoiceController.getInvoices);

router.get('/new', invoiceController.createInvoice);

router.post('/new', invoiceController.createInvoicePage);
router.post('/delete', invoiceController.deleteInvoices);

router.put('/:id', invoiceController.updateInvoice);
router.get('/:id', invoiceController.getInvoice);


module.exports = router;