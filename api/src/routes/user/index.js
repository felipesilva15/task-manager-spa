module.exports = (createRouter) => {
    const router = createRouter();

    const user = require("./user")(createRouter());

    router.use("/", user);

    return router;
};