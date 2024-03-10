// // app.js
// const express = require('express');
// const { invoices } = require('./data/data'); // `data.js` から請求書データをインポート
// const app = express();
// const port = 3000;

// app.get('/invoices/:companyName', (req, res) => {
//   const { companyName } = req.params;
//   const invoice = invoices.find(invoice => invoice.companyName === companyName);
//   if (!invoice) {
//     return res.status(404).send('Invoice not found');
//   }
//   res.json(invoice);
// });

// app.listen(port, () => {
//   console.log(`Invoice app listening at http://localhost:${port}`);
// });

const express = require('express');
const { invoices } = require('./data/data'); // data.jsの場所に応じてパスを調整
const app = express();
const port = 3000;

//テスト
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/', (req, res) => {
  let html = `<h1>請求書一覧</h1>`;
  html += `<table border="1"><tr><th>会社名</th><th>操作</th></tr>`;
  invoices.forEach((invoice, index) => {
    html += `<tr>
               <td>${invoice.companyName}</td>
               <td><a href="/invoices/${index}">詳細を見る</a></td>
             </tr>`;
  });
  html += `</table>`;
  res.send(html);
});

app.get('/invoices/:index', (req, res) => {
  const { index } = req.params;
  const invoice = invoices[index];
  if (!invoice) {
    return res.status(404).send('請求書が見つかりません');
  }
  let html = `<h1>${invoice.companyName}の請求書詳細</h1>`;
  html += `<div><a href="/">一覧に戻る</a></div>`;
  html += `<ul>`;
  invoice.items.forEach(item => {
    html += `<li>${item.name}: ${item.amount}円</li>`;
  });
  html += `</ul>`;
  res.send(html);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});