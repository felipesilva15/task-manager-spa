const createRouter = require("express").Router;
const router = createRouter();

const userRouter = require("./user/index")(createRouter);
const authRouter = require("./auth/index")(createRouter);
const taskRouter = require("./task/index")(createRouter);

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/task", taskRouter);

module.exports = router;