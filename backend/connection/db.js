import pkg from 'pg'
const {Pool} = pkg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stocktrading',
  password: 'yubrajgc55',
  port: 5432,
});

export const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
