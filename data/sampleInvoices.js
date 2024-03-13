const Invoice = require('../models/Invoice');

const sampleInvoices = [
    new Invoice("NEXTs株式会社", [
        { name: "面白くないのに笑いを取ろうとした際に生じた精神的苦痛料", amount: 1000000 },
        { name: "私がこの世に存在する尊さ料", amount: 20000000000 }
    ]),
    new Invoice("めんどくさいからテストと言う名前にする", [
        { name: "めんどくさいからテストと言う名前にする", amount: 1000000 }
    ]),
    new Invoice("ああああ", [
        { name: "いいいい", amount: 10 }
    ])
];

module.exports = sampleInvoices;
