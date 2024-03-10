// class Invoice {
//     constructor(companyName, items) {
//       this.companyName = companyName;
//       this.items = items; // InvoiceItem の配列
//     }
  
//     getTotalAmount() {
//       return this.items.reduce((sum, item) => sum + item.amount, 0);
//     }
//   }




class Invoice {
  constructor(companyName, items) {
    this.companyName = companyName;
    this.items = items; // InvoiceItem の配列
  }

  getTotalAmount() {
    return this.items.reduce((sum, item) => sum + item.amount, 0);
  }
}

// models/InvoiceItem.js
class InvoiceItem {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

module.exports = { Invoice, InvoiceItem };