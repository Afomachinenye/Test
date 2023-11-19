const express = require("express");
const dotenv = require("dotenv").config();
let { PORT } = process.env;
const app = express();
app.use(express.json());
let { getNotes } = require("./config/db");

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.send(notes);
});

app.listen(PORT || 4000, () => {
  console.log(`Listening to request on PORT ${PORT}`);
});
