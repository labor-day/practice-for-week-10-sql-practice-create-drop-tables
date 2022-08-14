let sqlite3 = require('sqlite3').verbose();
let sql;

//connect to db
let db = new sqlite3.Database('./puppies.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
  console.log("Connection successful");
})

// //create table
// sql = `CREATE TABLE puppies (
//   id INTEGER,
//   name VARCHAR(100),
//   age_yrs DECIMAL(2,1),
//   breed VARCHAR(100),
//   weight_lbs INT,
//   microchipped BOOLEAN
// )`;

// db.run(sql, [], err => {
//   if (err) return console.error(err.message);
//   console.log("table created");
// });

//insert data into the table
// sql = `INSERT INTO puppies
//   (id, name, age_yrs, breed, weight_lbs, microchipped)
//   VALUES
//   (1, 'Cooper', 1, 'Miniature Schnauzer', 18, 1),
//   (2, 'Indie', 0.5, 'Yorkshire Terrier', 13, 1),
//   (3, 'Kota', 0.7, 'Australian Shepherd', 26, 0),
//   (4, 'Zoe', 0.8, 'Korean Jindo', 32, 1),
//   (5, 'Charley', 1.5, 'Basset Hound', 25, 0),
//   (6, 'Ladybird', 0.6, 'Labradoodle', 20, 1),
//   (7, 'Callie', 0.9, 'Corgi', 16, 0),
//   (8, 'Jaxson', 0.4, 'Beagle', 19, 1),
//   (9, 'Leinni', 1, 'Miniature Schnauzer', 25, 1),
//   (10, 'Max', 1.6, 'German Shepherd', 65, 0)`;

// db.run(sql, (err) => {
//   if (err) return console.error(err.message);
// })

//query the table
sql = `SELECT * FROM puppies`;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach(row => console.log(row));
})

//specific query
sql =
