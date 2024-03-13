document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('a.invoice-detail-link')) {
      event.preventDefault();
      const index = target.getAttribute('data-index');
      fetch(`/api/invoices/${index}`)
        .then(response => response.json())
        .then(invoice => {
          const modalContent = `
            <h2>${invoice.companyName}の請求書詳細</h2>
            <ul>${invoice.items.map(item => `<li>${item.name}: ${item.amount}円</li>`).join('')}</ul>
            <button onclick="document.getElementById('modal').style.display='none'">閉じる</button>
          `;
          document.getElementById('modal-content').innerHTML = modalContent;
          document.getElementById('modal').style.display = 'block';
        });
    }
  });
});