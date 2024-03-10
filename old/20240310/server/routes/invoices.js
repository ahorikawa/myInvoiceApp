const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// 請求書一覧を取得
router.get('/', async (req, res) => {
  const invoices = await Invoice.find({});
  res.json(invoices);
});

// 特定の請求書の詳細を取得
router.get('/:id', async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  if (!invoice) {
    return res.status(404).send('Invoice not found');
  }
  res.json(invoice);
});

module.exports = router;