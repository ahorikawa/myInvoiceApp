const Invoice = require('../models/Invoice');
const sampleInvoices = require('../data/sampleInvoices');



exports.getInvoices = (req, res) => {
    res.render('invoices', { invoices: sampleInvoices });
};

exports.getInvoice = (req, res) => {

    const invoice = sampleInvoices.find(invoice => invoice.id === parseInt(req.params.id));
    res.render('invoice', { invoice });
};

exports.updateInvoice = async (req, res) => {


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

exports.deleteInvoices = (req, res) => {
    console.log(req.body);
    console.log("delete");
    console.log(res);
    const { ids } = req.body; // 削除する請求書のIDの配列

    // 仮データの配列（sampleInvoices）から指定されたIDの請求書を削除
    ids.forEach(id => {
        const index = sampleInvoices.findIndex(invoice => invoice.id === parseInt(id));
        if (index !== -1) {
            sampleInvoices.splice(index, 1); // 配列から削除
        }
    });

    res.json({ message: 'Selected invoices have been deleted successfully.' });
};


exports.createInvoicePage = (req, res) => {
    console.log("test")
    // 新規請求書作成ページの表示
    // 空の請求書データを生成してページに渡す
    const invoice = {
        companyName: "", // 企業名
        items: [], // 項目リスト
        totalAmount: 0 // 合計金額
    };
    res.render('invoice', { invoice });
    console.log(invoice);
};

