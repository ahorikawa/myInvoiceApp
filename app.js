// // Invoice Model
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const invoiceSchema = new Schema({
//     companyName: String,
//     items: [{ name: String, amount: Number }],
//     user: { type: Schema.Types.ObjectId, ref: 'User' }
// });

// const Invoice = mongoose.model('Invoice', invoiceSchema);

// // User Model
// const userSchema = new Schema({
//     name: String,
//     email: String,
//     invoices: [{ type: Schema.Types.ObjectId, ref: 'Invoice' }]
// });

// const User = mongoose.model('User', userSchema);


// const express = require('express');
// const cors = require('cors');


// const bodyParser = require('body-parser');
// const crypto = require('crypto');
// const fs = require('fs');
// const path = require('path');
// const session = require('express-session');
// const app = express();
// const authRoutes = require('./routes/authRoutes');
// const invoiceRoutes = require('./routes/invoiceRoutes');


// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.use('/api/invoices', invoiceRoutes);
// app.use(cors());

// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());




// app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// app.use(authRoutes);

// app.get('/', (req, res) => res.render('signup'));
// app.get('/login', (req, res) => res.render('login'));

// const PORT = process.env.PORT || 3000;


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// module.exports = app;


require('dotenv').config(); // 環境変数の設定を読み込み
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose'); // Mongooseを追加
const app = express();
const authRoutes = require('./routes/authRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');



// MongoDBへの接続
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/api/invoices', invoiceRoutes);
app.use(cors());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(authRoutes);

app.get('/', (req, res) => res.render('signup'));
app.get('/login', (req, res) => res.render('login'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
