const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/bonjour", (req, res) => {
  res.send("Bonjour le monde !");
});

app.get("/info", (req, res) => {
  res.send("Je suis juste une application de démonstration qui est super.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
