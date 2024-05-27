const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const User = require('../models/User');


router.get('/', invoiceController.getInvoices);

router.get('/new', invoiceController.createInvoice);
// router.get('/new', invoiceController.renderCreateInvoicePage); // GETリクエストを追加
router.post('/new', invoiceController.createInvoicePage);
router.post('/delete', invoiceController.deleteInvoices);

// router.post('/:id', invoiceController.updateInvoice);
router.put('/:id', invoiceController.updateInvoice);
router.get('/:id', invoiceController.getInvoice);


module.exports = router;