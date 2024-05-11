const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    companyName: String,
    items: [{
        name: String,
        amount: Number
    }],
    totalAmount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Invoice', invoiceSchema);


// class Invoice {
//   constructor(id, companyName, items) {
//       this.id = id; // idプロパティを追加
//       this.companyName = companyName;
//       this.items = items;
//       this.totalAmount = this.calculateTotal();
//   }

//   calculateTotal() {
//       return this.items.reduce((total, item) => total + item.amount, 0);
//   }
// }

// module.exports = Invoice;


