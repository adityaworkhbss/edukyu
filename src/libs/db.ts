// lib/db.ts
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_user',
    password: 'your_password',
    database: 'your_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
