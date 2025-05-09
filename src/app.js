const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("res1");
    // res.send("response 1");
    next();
  },
  (req, res, next) => {
    console.log("res2");
    // res.send("response 2");
    next();
  },
  (req, res, next) => {
    console.log("res3");

    // res.send("response 3");
    next();
  },
  (req, res, next) => {
    // res.send("response 4");
    next();
  }
);

app.listen(7777, () => {
  console.log("server is running succesfullysss 7777");
});
