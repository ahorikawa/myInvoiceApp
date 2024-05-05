// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
    try {
        await User.createUser(req.body.username, req.body.password);
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Error creating a user');
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findUser(req.body.username);
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            req.session.user = user;
            res.redirect('/api/invoices');
        } else {
            res.send('Invalid username or password');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

module.exports = router;
