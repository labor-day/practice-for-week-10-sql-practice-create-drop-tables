var sqlite3 = require('sqlite3').verbose();

let sql;

//connect to DB
let db = new sqlite3.Database('./practice.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
  console.log("Connection successful");
});

//Create table
// sql = 'CREATE TABLE dogs(id INTEGER PRIMARY KEY, name, age_yrs, breed, weight_lbs, microchipped)';
// db.run(sql);

//Drop table
//db.run('DROP TABLE IF EXISTS dogs2');

//Insert data into table
// let sql = 'INSERT INTO dogs(name, age_yrs, breed, weight_lbs, microchipped) VALUES(?,?,?,?,?)';
// db.run(sql, ["seso", 10, "cat", 11, true], (err) => {
//   if (err) return console.error(err.message);
// });

//query the data
// let sql = "SELECT * FROM dogs";
// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err.message);
//   rows.forEach(row => console.log(row));
// })

//view all tables
sql = "select name from sqlite_master where type='table'";
db.all(sql, [], (err, table) => {
  console.log(table);
})

//view schema?
sql = "select * from sqlite_schema";
  db.all(sql, [], (err, schema) => {
    console.log(schema)
  });

//create another table
// let sql = "CREATE TABLE dogs2(id INTEGER PRIMARY KEY, name)";
// db.run(sql);
