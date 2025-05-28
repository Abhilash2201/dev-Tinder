const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
// api for signup
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  // mongoose fnc to save the data to DB returns Promise so async
  await user.save();
  res.send("user added sucessful");
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
