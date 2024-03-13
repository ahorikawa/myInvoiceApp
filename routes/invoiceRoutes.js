const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

router.get('/', (req, res) => {
    // ここでルートパス `/` に対するレスポンスを送る
    // console.log("test");
    res.send('Hello World!')
  });
// router.get('/', invoiceController.getInvoices);
router.get('/:id', invoiceController.getInvoice);

module.exports = router;