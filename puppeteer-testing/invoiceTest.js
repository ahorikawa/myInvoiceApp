const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/api/invoices/'); // テストしたいページのURL

  const title = await page.title();
  console.assert(title === 'Invoices', 'Test Failed: Page title does not match');

  await browser.close();
})();
