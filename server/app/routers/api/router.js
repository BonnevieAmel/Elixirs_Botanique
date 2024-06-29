const express = require("express");

const router = express.Router();

const itemsRouter = require("./items/router");
const plantsRouter = require("./plantsRouter");

router.use("/items", itemsRouter);
router.use("/plants", plantsRouter);

/* ************************************************************************* */

module.exports = router;
