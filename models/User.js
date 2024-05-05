// models/User.js
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

function getUsers() {
    if (!fs.existsSync(usersFilePath)) return [];
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

async function createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    saveUser({ username, password: hashedPassword });
}

async function findUser(username) {
    const users = getUsers();
    return users.find(user => user.username === username);
}

module.exports = { createUser, findUser };
