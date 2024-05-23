const createRouter = require("express").Router;
const router = createRouter();

const userRouter = require("./user/index")(createRouter);
const authRouter = require("./auth/index")(createRouter);

router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;