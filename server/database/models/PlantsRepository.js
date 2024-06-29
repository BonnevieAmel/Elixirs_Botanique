const AbstractRepository = require("./AbstractRepository");

class PlantsRepository extends AbstractRepository {
  constructor() {
    super({ table: "plants" });
  }

  async browse() {
    const [rows] = await this.database.query(
      `
          SELECT *
          FROM ${this.table} 
          `
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `
          SELECT *
          FROM ${this.table} p
          WHERE p.id = ?
          `,
      [id]
    );
    return rows[0];
  }

  async add(plants) {
    const {
      plantsName,
      scientificName,
      description,
      virtues,
      contraindications,
      image,
    } = plants;
    const [result] = await this.database.query(
      `
          INSERT INTO ${this.table} (plantsName, scientificName, description, virtues, contraindications, image)
          VALUES (?, ?, ?, ?, ?, ?)
          `,
      [
        plantsName,
        scientificName,
        description,
        virtues,
        contraindications,
        image,
      ]
    );
    return result.insertId;
  }

  async edit(id, plants) {
    const {
      plantsName,
      scientificName,
      description,
      virtues,
      contraindications,
      image,
    } = plants;
    const [result] = await this.database.query(
      `
          UPDATE ${this.table}
          SET plantsName = ?, scientificName = ?, description = ?, virtues = ?, contraindications = ?, image = ?
          WHERE id = ?
          `,
      [
        plantsName,
        scientificName,
        description,
        virtues,
        contraindications,
        image,
        id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?
      `,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = PlantsRepository;
