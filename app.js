// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Drone CI Real Project Running Successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
