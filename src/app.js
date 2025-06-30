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
    res.send("user added sucessful " + user);
  } catch (err) {
    res.status(400).send("Something went wrong  " + err);
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
    const users = await User.find({ emailId: req.body.emailId });
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const id = req.body.userId;
  try {
    const result = await User.findByIdAndDelete(id);
    res.send(
      "user deleted successfully " + result.firstName + ` ${result.emailId}`
    );
  } catch (err) {
    res.status(400).send("something went wrong" + err);
  }
});

app.patch("/user", async (req, res) => {
  const id = req.body.userId;
  const updatedData = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, updatedData, {
      runValidators: true,
    });
    res.send("user updated successfully" + user);
  } catch (err) {
    res.status(400).send("something went wrong" + err);
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
