const express = require("express");

const router = express.Router();

const {
  browse,
  readOneById,
  add,
  edit,
  deleteTeas,
} = require("../../controllers/teasActions");

router.get("/", browse);
router.get("/:id", readOneById);
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", deleteTeas);

module.exports = router;
