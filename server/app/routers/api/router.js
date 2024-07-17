const express = require("express");

const router = express.Router();

const plantsRouter = require("./plantsRouter");
const teasRouter = require("./teasRouter");
const teasplantsRouter = require("./teasPlantsRouter");

router.use("/plants", plantsRouter);
router.use("/teas", teasRouter);
router.use("/teasplants", teasplantsRouter);

/* ************************************************************************* */

module.exports = router;
