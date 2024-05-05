const express = require('express');
const bodyParser = require('body-parser');
const invoiceRoutes = require('./routes/invoices');

const app = express();

// ミドルウェア
app.use(bodyParser.json());

// ルーティング
app.use('/api/invoices', invoiceRoutes);

// サーバー起動
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});