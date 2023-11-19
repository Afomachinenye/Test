const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// Create a MySQL connection pool
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

function getNotes() {
  return pool
    .query("SELECT * FROM NOTES")
    .then(([rows]) => {
      return rows;
    })
    .catch((error) => {
      console.error(error);
      throw error; // Re-throw the error so that the caller can handle it
    });
}

function main() {
  return getNotes()
    .then((notes) => {
      console.log(notes);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the main function
main();

module.exports = getNotes;
