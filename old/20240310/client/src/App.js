import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={InvoiceList} />
          <Route path="/invoices/:id" component={InvoiceDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;