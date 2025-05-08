import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from "./configConect.js";

console.log("Host: ", DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD);


export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});