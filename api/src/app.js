const { app } = require('./libs/custom-express');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3050;
const router = require('./routes/index');

app.use("/api", router);

app.listen(port, () => {
    console.log(`Lintening on port ${port}`);
});