module.exports = (createRouter) => {
    const router = createRouter();

    const login = require("./login")(createRouter());

    router.use("/login", login);

    return router;
};