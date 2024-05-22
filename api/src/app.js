const { app } = require('./libs/custom-express');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3050;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello world!'
    });
});

app.listen(port, () => {
    console.log(`Lintening on port ${port}`);
});