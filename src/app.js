const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
const validateSignupData = require("./utils/validate");
// api for signup
app.use(express.json());
app.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignupData(req);
    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the password
    const encryptPassword = await bcrypt.hash(password, 10);

    // creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: encryptPassword,
    });

    // mongoose fnc to save the data to DB returns Promise so async
    await user.save();
    res.send("user added sucessful " + user);
  } catch (err) {
    res.status(400).send("Something went wrong  " + err);
  }
});

// api to login
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid User");
    }
    const IsValidPassword = await bcrypt.compare(password, user.password);
    if (!IsValidPassword) {
      throw new Error("Invalid password");
    }
    res.send("Login Successfull");
  } catch (err) {
    res.status(400).send("Somethng went wrong : " + err.message);
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

// app.patch("/user", async (req, res) => {
//   const id = req.body.userId;
//   const updatedData = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(id, updatedData, {
//       runValidators: true,
//     });
//     res.send("user updated successfully" + user);
//   } catch (err) {
//     res.status(400).send("something went wrong" + err);
//   }
// });

// http://localhost:7777/user/6862952a2f70d6c0d906f4d0 //send id in params
app.patch("/user/:userId", async (req, res) => {
  const id = req.params?.userId;
  const updatedData = req.body;
  try {
    const ALLOWED_KEYS = [
      "userId",
      "firstName",
      "gender",
      "lastName",
      "skills",
    ];
    const isUpdateAllowed = Object.keys(updatedData).every((item) =>
      ALLOWED_KEYS.includes(item)
    );
    if (!isUpdateAllowed) {
      throw new Error(" update allowed only to these keys " + ALLOWED_KEYS);
    }
    const user = await User.findByIdAndUpdate(id, updatedData, {
      runValidators: true,
    });
    res.send("user updated successfully" + user);
  } catch (err) {
    res.status(400).send("Something went wrong " + err);
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
