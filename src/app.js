const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
// api for signup
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Mahesh",
    lastName: "Kumar",
    emailId: "maheshkumar@gmail.com",
    password: "mahesh@123",
    age: "20",
    gender: "male",
  });
  // mongoose fnc to save the data to DB returns Promise so async
  await user.save();
  res.send("user added successsful");
});

connectDB()
  .then(() => {
    console.log("DB connection Successful");
    app.listen(7777, () => {
      console.log("Server is listening to PORT 7777");
    });
  })
  .catch((err) => {
    console.log(err);
  });
