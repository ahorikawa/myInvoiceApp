import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function InvoiceDetail() {
  const [invoice, setInvoice] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/invoices/${id}`)
      .then(res => res.json())
      .then(data => setInvoice(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!invoice) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{invoice.companyName}</h2>
      <p>請求書番号: {invoice.invoiceNumber}</p>
      <p>請求日: {invoice.billingDate}</p>
      <p>お支払期限: {invoice.dueDate}</p>
      <p>合計金額: {invoice.totalAmount}円</p>
    </div>
  );
}

export default InvoiceDetail;