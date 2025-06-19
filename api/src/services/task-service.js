const utils = require('../libs/utils');
const fs = require('fs');
const dataFilePath = './src/data/tasks.json';

utils.checkFileAndCreateFile(dataFilePath, '[]');
let tasks = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

exports.list = (userId) => {
    let data = tasks;

    if (userId) {
        data = tasks.filter((item) => {
            return item.userId == userId
        });
    }

    return data;
}

exports.getById = (id) => {
    return tasks.find((task) => {
        return task.id.includes(id);
    });
};

exports.create = (data) => {
    const task = {
        id: utils.generateUUID(),
        description: data.description,
        userId: data.userId,
        completed: data.completed ?? false
    };

    tasks.push(task);
    fs.writeFileSync(dataFilePath, JSON.stringify(tasks), 'utf-8');

    return task;
};

exports.update = (id, data) => {
    const task = {
        id: id,
        description: data.description,
        userId: data.userId,
        completed: data.completed
    };

    this.delete(id);

    tasks.push(task);
    fs.writeFileSync(dataFilePath, JSON.stringify(tasks), 'utf-8');

    return task;
};

exports.delete = (id) => {
    tasks = tasks.filter((task) => {
        return task.id !== id
    });

    fs.writeFileSync(dataFilePath, JSON.stringify(tasks), 'utf-8');
};

exports.toogleCompleted = (id) => {
    let data = this.getById(id);

    data.completed = !data.completed;

    this.update(id, data);

    return data;
};