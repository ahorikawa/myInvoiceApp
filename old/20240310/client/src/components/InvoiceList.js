import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch('/api/invoices')
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {invoices.map(invoice => (
        <li key={invoice._id}>
          <Link to={`/invoices/${invoice._id}`}>{invoice.companyName}</Link>
        </li>
      ))}
    </ul>
  );
}

export default InvoiceList;