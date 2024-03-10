const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  companyName: String,
  invoiceNumber: String,
  billingDate: Date,
  dueDate: Date,
  totalAmount: Number,
});

module.exports = mongoose.model('Invoice', invoiceSchema);