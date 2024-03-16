// class Invoice {
//   constructor(companyName, items) {
//       this.companyName = companyName;
//       this.items = items;
//       this.totalAmount = this.calculateTotal();
//   }

//   calculateTotal() {
//       return this.items.reduce((total, item) => total + item.amount, 0);
//   }
// }

// module.exports = Invoice;


class Invoice {
  constructor(id, companyName, items) {
      this.id = id; // idプロパティを追加
      this.companyName = companyName;
      this.items = items;
      this.totalAmount = this.calculateTotal();
  }

  calculateTotal() {
      return this.items.reduce((total, item) => total + item.amount, 0);
  }
}

module.exports = Invoice;

