import { pool } from "../config/database.js";

export class ProductModel {
  static async getAll() {
    const { rows } = await pool.query("SELECT * FROM product ORDER BY id ASC");
    return rows;
  }
  static async getById(id) {
    const { rows } = await pool.query("SELECT * FROM product WHERE id = $1", [id]);
    return rows[0];
  }

  static async create(productData) {
    const { name, description, price, stock } = productData;
    const query = `
      INSERT INTO product (name, description, price, stock)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, description, price, stock]);
    return rows[0];
  }

  static async update(id, productData) {
    const { name, description, price, stock } = productData;
    const query = `
      UPDATE product
      SET name = $1, description = $2, price = $3, stock = $4
      WHERE id = $5
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, description, price, stock, id]);
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query("DELETE FROM product WHERE id = $1 RETURNING *", [id]);
    return rows[0];
  }
}

export default ProductModel;
