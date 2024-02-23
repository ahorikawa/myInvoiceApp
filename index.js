// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('請求書作成Webサービスへようこそ！　このサービスであなたは請求書を作ることができます！');
// });

// app.listen(port, () => {
//   console.log(`サーバーがポート ${port} で起動しました。`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    // 仮の請求書データ
    const invoice = {
        customer: "株式会社NEXT",
        invoiceNumber: 123456,
        invoiceDate: "2024-02-21",
        dueDate: "2024-03-23",
        companyInfo: "NEXTs株式会社",
        items: [
            { name: "商品A", quantity: 2.5, unit: "個", unitPrice: 1000, taxRate: 10, amount: 2500 },
            { name: "商品B", quantity: 1.0, unit: "個", unitPrice: 2000, taxRate: 8, amount: 2000 }
        ],
        getTotalAmount: function() {
            return this.items.reduce((total, item) => total + item.amount, 0);
        }
    };

    res.render('invoice', { invoice: invoice });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
