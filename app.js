const express = require('express');
const app = express();
const invoiceRoutes = require('./routes/invoiceRoutes');

app.set('view engine', 'ejs');
app.use('/invoices', invoiceRoutes);


const PORT = process.env.PORT || 3000;
// console.log(invoiceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
