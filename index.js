const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('請求書作成Webサービスへようこそ！　このサービスであなたは請求書を作ることができます');
});

app.listen(port, () => {
  console.log(`サーバーがポート ${port} で起動しました。`);
});