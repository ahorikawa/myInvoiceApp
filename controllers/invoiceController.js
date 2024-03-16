const Invoice = require('../models/Invoice');
const sampleInvoices = require('../data/sampleInvoices');

exports.getInvoices = (req, res) => {
    res.render('invoices', { invoices: sampleInvoices });
};

exports.getInvoice = (req, res) => {

    const invoice = sampleInvoices.find(invoice => invoice.id === parseInt(req.params.id));
    res.render('invoice', { invoice });
};

// exports.updateInvoice = (req, res) => {
//     console.log("req.params", req.params);
//     console.log("req.body", req.body);
//     const { id } = req.params;
//     const { companyName, items } = req.body;

//     // 請求書データを検索
//     const index = sampleInvoices.findIndex(invoice => invoice.id === parseInt(id));

//     // 請求書が見つかった場合、データを更新
//     if (index !== -1) {
//         sampleInvoices[index].companyName = companyName;
//         sampleInvoices[index].items = items;
//         res.send({ message: 'Invoice updated successfully' });
//     } else {
//         res.status(404).send({ message: 'Invoice not found' });
//     }
// };

exports.updateInvoice = async (req, res) => {
    console.log(req.params);
    console.log("★★★★★★★★★");
    console.log(req.body);
    const { id } = req.params;
    const { companyName, items } = req.body;

    // ここでデータベースの更新処理を実装します
    // サンプルコードでは、仮データの配列を直接更新していますが、実際にはデータベース操作を行うべきです
    const index = sampleInvoices.findIndex(invoice => invoice.id === parseInt(id));
    if (index !== -1) {
        sampleInvoices[index].companyName = companyName;
        sampleInvoices[index].items = items;
        // 仮データを更新した後、実際のアプリケーションではデータベースのデータを更新する処理を記述
        res.json({ message: 'Invoice updated successfully' });
    } else {
        res.status(404).json({ message: 'Invoice not found' });
    }
};

