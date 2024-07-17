const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const teas = await tables.teas.browse();
    res.json(teas);
  } catch (error) {
    next(error);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const teas = await tables.teas.readOneById(req.params.id);
    res.json(teas);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    console.info("Received data for new tea:", req.body);

    if (!req.body) {
      throw new Error("Request body is missing");
    }

    const teas = await tables.teas.add(req.body);
    res.status(201).json({ teas });
  } catch (error) {
    console.error("Error adding new tea:", error);
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.teas.edit(req.params.id, req.body);
    if (affectedRows > 0) {
      res.json({ message: "tea updated successfully" });
    } else {
      res.status(404).json({ message: "teas not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteTeas = async (req, res, next) => {
  try {
    await tables.teas.delete(req.params.id);
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
  deleteTeas,
};
