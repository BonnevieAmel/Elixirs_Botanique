const AbstractRepository = require("./AbstractRepository");

class TeasPlantsRepository extends AbstractRepository {
  constructor() {
    super({ table: "teasplants" });
  }

  async browse() {
    const [rows] = await this.database.query(`
        SELECT * FROM ${this.table}
        `);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `
        SELECT * FROM ${this.table} WHERE id = ?
        `,
      [id]
    );
    return rows[0];
  }

  async readByRecipeId(id) {
    const [rows] = await this.database.query(
      `
      SELECT * FROM ${this.table} tp
      INNER JOIN teas t ON tp.teas_id = t.id
      INNER JOIN plants p ON tp.plants_id = p.id
      WHERE t.id = ?
      `,
      [id]
    );
    return rows;
  }

  async add(newTeasPlants) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (tea_id, plant_id, quantity)
      VALUES (?, ?, ?)`,
      [newTeasPlants.tea_id, newTeasPlants.plant_id, newTeasPlants.quantity]
    );
    return result.insertId;
  }

  async edit(id, updatedTeasPlants) {
    const query = `
      UPDATE ${this.table} SET ? WHERE id = ?
    `;
    const [result] = await this.database.query(query, [updatedTeasPlants, id]);
    return result.affectedRows > 0;
  }

  async editByRecipeId(newTeasPlants, id) {
    const query = `
      UPDATE ${this.table} tp
      INNER JOIN teas t ON tp.teas_id = t.id
      SET quantity = ?
      WHERE t.id = ?
    `;
    const [result] = await this.database.query(query, [newTeasPlants, id]);
    return result.affectedRows > 0;
  }

  async delete(id) {
    const query = `
      DELETE FROM ${this.table} WHERE id = ?
    `;
    const [result] = await this.database.query(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = TeasPlantsRepository;
