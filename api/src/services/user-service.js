const utils = require('../libs/utils');
const fs = require('fs');
const taskService = require('./task-service');
const dataFilePath = './src/data/users.json';

utils.checkFileAndCreateFile(dataFilePath, '[]');
let users = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

exports.list = () => {
    return users;
}

exports.getById = (id) => {
    return users.find((user) => {
        return user.id.includes(id);
    });
};

exports.create = (data) => {
    const user = {
        id: utils.generateUUID(),
        name: data.name,
        email: data.email,
        password: data.password
    };

    users.push(user);
    fs.writeFileSync(dataFilePath, JSON.stringify(users), 'utf-8');

    return user;
};

exports.update = (id, data) => {
    const user = {
        id: id,
        name: data.name,
        email: data.email,
        password: data.password
    };

    this.delete(id);

    users.push(user);
    fs.writeFileSync(dataFilePath, JSON.stringify(users), 'utf-8');

    return user;
};

exports.delete = (id) => {
    users = users.filter((user) => {
        return user.id !== id
    });

    fs.writeFileSync(dataFilePath, JSON.stringify(users), 'utf-8');
};

exports.validateLogin = (email, password) => {
    const user = users.find(user => user.email == email);

    if (!user || user.password != password) {
        return null;
    }

    return user;
};

exports.getTasks = (id) => {
    let data = taskService.list(id);

    return data;
};