const express = require("express");
const app = express();

// app.use((req, res) => {
//   res.send(`hi${app}`);
// });

// app.use("/", (req, res) => {
//   res.send("HI Its a generic response");
// });

app.use("/home/2", (req, res) => {
  res.send("home route response of ID 2");
});
app.use("/home", (req, res) => {
  res.send("home route response");
});

app.use("/test", (req, res) => {
  res.send("test data response");
});

app.get("/user", (req, res) => {
  res.send("user data fetched successfully");
});

app.post("/user", (req, res) => {
  res.send("user data saved to DB");
});

app.delete("/user", (req, res) => {
  res.send("user data deleted successfully");
});

//  always this should be at last else
// Catch-all route
app.use("/", (req, res) => {
  res.send("HI Its a generic response");
});

app.listen(7777, () => {
  console.log("server is running succesfullysss 7777");
});
