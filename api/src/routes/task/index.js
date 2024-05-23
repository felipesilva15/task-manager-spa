module.exports = (createRouter) => {
    const router = createRouter();

    const task = require("./task")(createRouter());

    router.use("/", task);

    return router;
};