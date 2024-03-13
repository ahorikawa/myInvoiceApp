const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');



const invoices = [{
  id:1,
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
},
{
  id:2,
  customer: "株式会社2",
  invoiceNumber: 123457,
  invoiceDate: "2024-02-21",
  dueDate: "2024-03-23",
  companyInfo: "株式会社2",
  items: [
      { name: "ラーメン", quantity: 2.5, unit: "個", unitPrice: 1000, taxRate: 10, amount: 2500 },
      { name: "かた焼きそば", quantity: 1.0, unit: "個", unitPrice: 2000, taxRate: 8, amount: 2000 }
  ],
  getTotalAmount: function() {
      return this.items.reduce((total, item) => total + item.amount, 0);
  }
},
{
  id:3,
  customer: "株式会社3",
  invoiceNumber: 123458,
  invoiceDate: "2024-02-21",
  dueDate: "2024-03-23",
  companyInfo: "株式会社3",
  items: [
      { name: "焼きおにぎり", quantity: 2.5, unit: "個", unitPrice: 1000, taxRate: 10, amount: 2500 },
      { name: "明太子", quantity: 1.0, unit: "個", unitPrice: 2000, taxRate: 8, amount: 2000 }
  ],
  getTotalAmount: function() {
      return this.items.reduce((total, item) => total + item.amount, 0);
  }
},
];

app.use(express.json());

// 請求書の一覧を取得
app.get('/invoices', (req, res) => {
  const summary = invoices.map(inv => ({
    id: inv.id,
    customer: inv.customer,
    totalAmount: inv.items.reduce((sum, item) => sum + item.amount, 0)
  }));
//  res.json(summary);
  res.render('summary', {summary:summary});
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// 特定の請求書の詳細を取得
app.get('/invoices/:id', (req, res) => {
  const invoice = invoices.find(inv => inv.id === parseInt(req.params.id));
  if (!invoice) {
    return res.status(404).send('Invoice not found');


  }
//  res.json(invoice);
  res.render('invoice', { invoice: invoice });
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
