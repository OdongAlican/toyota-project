const express = require("express");
const parser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(express.static("./templates"));

// middleware
app.use(parser.urlencoded({ extended: false }));

const getConnection = mysql.createConnection({
  host: "localhost",
  user: "alican",
  database: "alican1",
  password: "123"
});

getConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

// This routes post users to the database
app.post("/user_create", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const queryString =
    "INSERT INTO `users` (`firstName`, `lastName`, `password`) VALUES (?, ?, ?)";
  getConnection.query(
    queryString,
    [firstName, lastName, password],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});

// // This routes post registration form to the database
app.post("/user_register", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const name = req.body.name;
  const address = req.body.address;
  const country = req.body.country;
  const zipCode = req.body.zipCode;
  const email = req.body.email;
  const gender = req.body.gender;
  const language = req.body.language;
  const about = req.body.about;
  const queryString =
    "INSERT INTO `regform` (`userId`, `password`, `name`, `address`, `country`, `zipCode`, `email`, `gender`, `language`, `about`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  getConnection.query(
    queryString,
    [
      userId,
      password,
      name,
      address,
      country,
      zipCode,
      email,
      gender,
      language,
      about
    ],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});

const PORT = process.env.PORT || 3000;

// Binding to a port
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});
