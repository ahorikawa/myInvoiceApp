const Invoice = require('../models/Invoice');

exports.getInvoices = async (req, res) => {
    const invoices = await Invoice.find();
    res.render('invoices', { invoices });
};

exports.getInvoice = async (req, res) => {
    const invoice = await Invoice.findById(req.params.id);
    if (invoice) {
        res.render('detailinvoice', { invoice });
    } else {
        res.status(404).send('Invoice not found');
    }
};

exports.createInvoice = (req, res) => {
    res.render('addinvoice', { invoice: new Invoice() });
};

exports.createInvoicePage = async (req, res) => {
    console.log("create");
    const { companyName, items } = req.body;
    const newInvoice = new Invoice({
        companyName: companyName,
        items: items,
        totalAmount: items.reduce((total, item) => total + item.amount, 0)  // 合計金額を計算
    });
    try {
        const savedInvoice = await newInvoice.save();
        console.log('Created Invoice ID:', savedInvoice._id); // ターミナルに新しいinvoiceIdを出力
        res.status(201).json({ message: 'Invoice created successfully', invoice: savedInvoice });
    } catch (error) {
        res.status(400).send("Error creating invoice: " + error.message);
    }
};

//     try {
//         await newInvoice.save();
//         res.redirect('/invoices');  // 請求書一覧ページにリダイレクト
//     } catch (error) {
//         res.status(400).send("Error creating invoice: " + error.message);
//     }
// };

// exports.renderCreateInvoicePage = (req, res) => {
//     res.render('createInvoice'); // 新規作成ページをレンダリング
// };

// exports.createInvoice = async (req, res) => {
//     const { companyName, items } = req.body;
//     const newInvoice = new Invoice({
//         companyName: companyName,
//         items: items,
//         totalAmount: items.reduce((total, item) => total + item.amount, 0)
//     });

//     try {
//         await newInvoice.save();
//         res.status(201).json(newInvoice);  // JSONで新しいインボイスデータをクライアントに返す
//     } catch (error) {
//         res.status(400).json({ message: "Error creating invoice: " + error.message });
//     }
// };

exports.updateInvoice = async (req, res) => {
    console.log("update");
    const { id } = req.params;
    const { companyName, items } = req.body;
    const invoice = await Invoice.findByIdAndUpdate(id, { companyName, items }, { new: true });
    if (invoice) {
        res.json({ message: 'Invoice updated successfully', invoice });
    } else {
        res.status(404).json({ message: 'Invoice not found' });
    }
};

exports.deleteInvoices = async (req, res) => {
    console.log(req);
    const { ids } = req.body; // 削除する請求書のIDの配列
    await Invoice.deleteMany({_id: { $in: ids }});
    res.json({ message: 'Selected invoices have been deleted successfully.' });
};




// const Invoice = require('../models/Invoice');
// const sampleInvoices = require('../data/sampleInvoices');



// exports.getInvoices = (req, res) => {
//     res.render('invoices', { invoices: sampleInvoices });
// };

// exports.getInvoice = (req, res) => {

//     const invoice = sampleInvoices.find(invoice => invoice.id === parseInt(req.params.id));
//     res.render('invoice', { invoice });
// };

// exports.updateInvoice = async (req, res) => {


//     const { id } = req.params;
//     const { companyName, items } = req.body;

//     // ここでデータベースの更新処理を実装します
//     // サンプルコードでは、仮データの配列を直接更新していますが、実際にはデータベース操作を行うべきです
//     const index = sampleInvoices.findIndex(invoice => invoice.id === parseInt(id));
//     if (index !== -1) {
//         sampleInvoices[index].companyName = companyName;
//         sampleInvoices[index].items = items;
//         // 仮データを更新した後、実際のアプリケーションではデータベースのデータを更新する処理を記述
//         res.json({ message: 'Invoice updated successfully' });
//     } else {
//         res.status(404).json({ message: 'Invoice not found' });
//     }
// };

// exports.deleteInvoices = (req, res) => {
//     console.log(req.body);
//     console.log("delete");
//     console.log(res);
//     const { ids } = req.body; // 削除する請求書のIDの配列

//     // 仮データの配列（sampleInvoices）から指定されたIDの請求書を削除
//     ids.forEach(id => {
//         const index = sampleInvoices.findIndex(invoice => invoice.id === parseInt(id));
//         if (index !== -1) {
//             sampleInvoices.splice(index, 1); // 配列から削除
//         }
//     });

//     res.json({ message: 'Selected invoices have been deleted successfully.' });
// };


// exports.createInvoicePage = (req, res) => {
//     console.log("test")
//     // 新規請求書作成ページの表示
//     // 空の請求書データを生成してページに渡す
//     const invoice = {
//         companyName: "", // 企業名
//         items: [], // 項目リスト
//         totalAmount: 0 // 合計金額
//     };
//     res.render('invoice', { invoice });
//     console.log(invoice);
// };

