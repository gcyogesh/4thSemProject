import { pool } from "../connection/db.js";

// Insert user into the PostgreSQL database
export const insertUserInDB = async (name, email, password) => {
  try {
    const query = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *';
    const values = [name, email, password];
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the inserted user
  } catch (error) {
    throw new Error('Error inserting user: ' + error.message);
  }
};
