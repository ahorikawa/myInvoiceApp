const User = require('../models/user'); // User モデルの読み込み

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.postSignup = (req, res) => {
    // サインアップ処理
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = (req, res) => {
    // ログイン処理
};

exports.getLogout = (req, res) => {
    // ログアウト処理
};
