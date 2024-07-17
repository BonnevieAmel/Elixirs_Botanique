const AbstractRepository = require("./AbstractRepository");

class TeasRepository extends AbstractRepository {
  constructor() {
    super({ table: "teas" });
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
          FROM ${this.table} t
          WHERE t.id = ?
          `,
      [id]
    );
    return rows[0];
  }

  async add(teas) {
    const { teaName, description, preparation } = teas;
    const [result] = await this.database.query(
      `
          INSERT INTO ${this.table} (teaName, description, preparation)
          VALUES (?, ?, ?)
          `,
      [teaName, description, preparation]
    );
    return result.insertId;
  }

  async edit(id, teas) {
    const { teaName, description, preparation } = teas;
    const [result] = await this.database.query(
      `
          UPDATE ${this.table}
          SET teaName = ?, description = ?, preparation = ?
          WHERE id = ?
          `,
      [teaName, description, preparation, id]
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

module.exports = TeasRepository;
