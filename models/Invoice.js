class Invoice {
  constructor(companyName, items) {
      this.companyName = companyName;
      this.items = items;
      this.totalAmount = this.calculateTotal();
  }

  calculateTotal() {
      return this.items.reduce((total, item) => total + item.amount, 0);
  }
}

module.exports = Invoice;
