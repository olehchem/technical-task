const express = require("express");
const phonesData = require("./phones.json");

const PORT = 4000;

const app = express();

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
