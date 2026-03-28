import { pool } from "../config/database.js";

export class ProductModel {
  static async getAll() {
    const { rows } = await pool.query("SELECT * FROM products ORDER BY id ASC");
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    return rows[0];
  }

  static async create(productData) {
    const { name, description, price, stock, category } = productData;
    const query = `
      INSERT INTO products (name, description, price, stock, category)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, description, price, stock, category]);
    return rows[0];
  }

  static async update(id, productData) {
    const { name, description, price, stock, category } = productData;
    const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, stock = $4, category = $5
      WHERE id = $6
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, description, price, stock, category, id]);
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);
    return rows[0];
  }
}

export default ProductModel;
