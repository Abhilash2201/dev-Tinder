const express = require("express");
const app = express();
console.log(app, "app");
console.log(express, "express");

app.use((req, res) => {
  res.send(`hi${app}`);
});
app.listen(7777, () => {
  console.log("server is running succesfullysss 7777");
});
