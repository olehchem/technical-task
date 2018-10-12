const express = require("express");
const phonesData = require("./phones.json");

const PORT = 4000;
const DELAY = 1500;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.get("/phones", (req, res) => {
  setTimeout(() => {
    res.json(phonesData);
  }, DELAY);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
