const express = require('express');
const app = express();
const invoiceRoutes = require('./routes/invoiceRoutes');

app.use(express.json());
app.set('view engine', 'ejs');
// app.use('/', invoiceRoutes);
app.use('/api/invoices', invoiceRoutes);


// app.use('/api/invoices', invoiceRoutes); // ここを修正


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
