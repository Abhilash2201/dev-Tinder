const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  emailId: { type: String },
  password: { type: String },
  age: { type: String },
  gender: { type: String },
});

const User = mongoose.model("user", userSchema);
// will create a collection name [ users ]
module.exports = User;
