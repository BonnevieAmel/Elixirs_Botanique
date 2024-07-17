const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  readByRecipeId,
  edit,
  editByRecipeId,
  add,
  deleteTeasPlants,
} = require("../../controllers/teasPlantsActions");

router.get("/", browse);
router.get("/:id", read);
router.get("/recipe/:id", readByRecipeId);
router.put("/:id", edit);
router.put("/recipe/:id", editByRecipeId);
router.post("/", add);
router.delete("/:id", deleteTeasPlants);

module.exports = router;
