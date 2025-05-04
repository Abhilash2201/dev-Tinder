const express = require("express");
const app = express();

// app.get("/abc?", (req, res) => {
//   res.send("users data regex");
// });

// http://localhost:7777/user?userID=567&password=test
// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send("setver response");
// });

// for dynamic route values
// http://localhost:7777/user?userID=567&password=test
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send("response from server");
});

app.listen(7777, () => {
  console.log("server is running succesfullysss 7777");
});
