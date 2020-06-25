const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "test-db.cjp3btkahb49.us-east-2.rds.amazonaws.com",
  user: "testuser",
  database: "test",
  password: "Password!123",
});

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
