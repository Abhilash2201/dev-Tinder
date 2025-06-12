const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
// api for signup
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  // mongoose fnc to save the data to DB returns Promise so async
  try {
    await user.save();
    res.send("user added sucessful");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// api to fetch allUser
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// fetch the required user
app.get("/user", async (req, res) => {
  console.log(req.body.emailId);

  try {
    const users = await U  ser.find({ emailId: req.body.emailId });
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
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
