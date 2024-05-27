// require('dotenv').config(); // 環境変数の設定を読み込み
const dotenv = require('dotenv');

// NODE_ENV 環境変数をチェックし、それに応じて正しい .env ファイルを読み込む
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose'); // Mongooseを追加
const app = express();
const authRoutes = require('./routes/authRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    loggerLevel: 'error' // ログレベルを 'error' に設定
  };

// MongoDBへの接続
mongoose.set('debug', false);
// mongoose.setLogLevel('error')

mongoose.connect(process.env.DB_URI, options)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
// mongoose.connect(process.env.DB_URI, options,)
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));


// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/api/invoices', invoiceRoutes);
app.use(cors());

// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true
// }));

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
