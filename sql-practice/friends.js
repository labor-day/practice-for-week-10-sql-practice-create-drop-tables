var sqlite3 = require('sqlite3').verbose();

let sql;

//connect to DB
let db = new sqlite3.Database('./friends.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
  console.log("Connection successful");
});

//create table
// sql = `CREATE TABLE friends(
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   first_name VARCHAR(255) NOT NULL,
//   last_name VARCHAR(255) NOT NULL
//   )`;
// db.run(sql);

//view all tables
// sql = "select name from sqlite_master where type='table'";
// db.all(sql, [], (err, table) => {
//   console.log(table);
// })

//insert data
// sql = `INSERT INTO friends (id, first_name, last_name) VALUES (?,?,?)`;
// db.run(sql, [1, "Amy", "Pond"], (err) => {
//   if (err) return console.error(err.message);
// });

//insert more data
// sql = `INSERT INTO friends (first_name, last_name) VALUES ("Rose", "Tyler"), ("Martha", "Jones")`;
// db.run(sql, (err) => {
//   if (err) return console.error(err.message);
// })

//insert at an ID that is taken
// sql = `REPLACE INTO friends(id, first_name, last_name) VALUES (11, "REPLACED", "REPLACED")`;
// db.run(sql, (err) => {
//   if (err) return console.error(err.message);
// })

// let sql = 'INSERT INTO dogs(name, age_yrs, breed, weight_lbs, microchipped) VALUES(?,?,?,?,?)';
// db.run(sql, ["seso", 10, "cat", 11, true], (err) => {
//   if (err) return console.error(err.message);
// });

//update a name
// sql = `UPDATE friends
//         SET last_name = 'UPDATED'
//         WHERE first_name = 'REPLACED'`;
// db.run(sql);

//try to remove last name from friend #5
sql = `UPDATE friends
        SET last_name=''
        WHERE id=5`;

db.run(sql, (err) => {
  if (err) return console.error(err.message);
})


//query the data
sql = "SELECT * FROM friends";
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach(row => console.log(row));
})
