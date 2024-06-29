const express = require("express");

const router = express.Router();

const {
  browse,
  readOneById,
  add,
  edit,
  deletePlants,
} = require("../../controllers/plantsActions");

router.get("/", browse);
router.get("/:id", readOneById);
router.post("/", add);
router.put("/:id", edit);
router.delete("/:id", deletePlants);

module.exports = router;
