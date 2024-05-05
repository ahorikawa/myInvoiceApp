const request = require('supertest');
const app = require('../app'); // Expressアプリケーションをエクスポートするようにapp.jsを調整する必要があります。

describe('Invoiceの保存と表示モードの変更をテスト', () => {
  test('保存ボタンを押すと編集モードから表示モードに変更される', async () => {
    const response = await request(app)
      .post('/api/invoices/save') // 仮のエンドポイント
      .send({id: "4",
      companyName: "株式会社テスト",
    //   items:None,
    //   totalAmount: 10000,
    });
    expect(response.statusCode).toBe(200);
    // 応答に基づいてさらにテストを行う
  });
});
