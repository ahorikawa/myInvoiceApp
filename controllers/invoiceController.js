const Invoice = require('../models/Invoice');
const sampleInvoices = require('../data/sampleInvoices');

exports.getInvoices = (req, res) => {
    console.log("test");
    res.render('invoices', { invoices: sampleInvoices });
};

exports.getInvoice = (req, res) => {
    const invoice = sampleInvoices.find(invoice => invoice.id === parseInt(req.params.id));
    res.render('invoice', { invoice });
};
