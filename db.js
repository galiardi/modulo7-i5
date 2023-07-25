import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  pool: {
    max: 151, // 151 max_connections by default in MySQL
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// try {
//   await db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error.message);
// }

export { db };
