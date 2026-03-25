import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
})

export async function conectar() {
    try {
        await pool.connect()
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log(error)
    }
}
