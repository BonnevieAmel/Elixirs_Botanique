const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const plants = await tables.plants.browse();
    res.json(plants);
  } catch (error) {
    next(error);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const plants = await tables.plants.readOneById(req.params.id);
    res.json(plants);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    console.info("Received data for new plant:", req.body);

    if (!req.body) {
      throw new Error("Request body is missing");
    }

    const plants = await tables.plants.add(req.body);
    res.status(201).json({ plants });
  } catch (error) {
    console.error("Error adding new plant:", error);
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.plants.edit(req.params.id, req.body);
    if (affectedRows > 0) {
      res.json({ message: "Plants updated successfully" });
    } else {
      res.status(404).json({ message: "Plants not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deletePlants = async (req, res, next) => {
  try {
    await tables.plants.delete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  readOneById,
  add,
  edit,
  deletePlants,
};
