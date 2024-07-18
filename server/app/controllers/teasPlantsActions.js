const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const teasplants = await tables.teasplants.browse();
    res.json(teasplants);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const teasplants = await tables.teasplants.read(id);
    if (teasplants) {
      res.json(teasplants);
    } else {
      res.status(404).json({ message: "teasplants not found" });
    }
  } catch (error) {
    next(error);
  }
};

const readByRecipeId = async (req, res, next) => {
  try {
    const teasplants = await tables.teasplants.readByRecipeId(req.params.id);
    res.json(teasplants);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    console.info("Received data for new teasplants", req.body);

    if (!req.body) {
      throw new Error("Request body is missing");
    }

    const teasplants = await tables.teasplants.add(req.body);
    res.status(201).json({ teasplants });
  } catch (error) {
    console.error("Error adding new teasplants:", error);
    next(error);
  }
};
const edit = async (req, res, next) => {
  const { id } = req.params;
  const updatedTeasPlantsData = req.body;
  try {
    const success = await tables.teasplants.edit(id, updatedTeasPlantsData);
    if (success) {
      const updatedTeasPlants = { id, ...updatedTeasPlantsData };
      res.json(updatedTeasPlants);
    } else {
      res.status(404).json({ message: "TeasPlants not found" });
    }
  } catch (error) {
    next(error);
  }
};

const editByRecipeId = async (req, res, next) => {
  const { id } = req.params;
  const newTeasPlants = req.body.teasplants;

  try {
    const success = await tables.teasplants.editByRecipeId(newTeasPlants, id);
    if (success) {
      const updatedTeasPlants = { newTeasPlants, id };
      res.json(updatedTeasPlants);
    } else {
      res.status(404).json({
        message: "TeasPlants not found for given recipe and ingredient",
      });
    }
  } catch (error) {
    next(error);
  }
};
const deleteTeasPlants = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await tables.teasplants.delete(id);
    if (success) {
      res.json({ message: "TeasPlants deleted successfully" });
    } else {
      res.status(404).json({ message: "TeasPlants not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  readByRecipeId,
  add,
  edit,
  editByRecipeId,
  deleteTeasPlants,
};
