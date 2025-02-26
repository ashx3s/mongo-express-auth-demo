const express = require("express");
const connectToDatabase = require("./middleware/connectToDatabase");
const PORT = process.env.PORT | 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
