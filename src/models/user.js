const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    emailId: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is not a valid address " + value);
        }
      },
    },
    password: { type: String, unique: true },
    age: { type: String, maxlength: 3 },
    skills: { type: [String] },
    photoUrl: {
      type: String,
      default:
        "https://cdn.pixabay.com/collection/thumbnail/2025/06/05/monk-1791113_1280.jpg",
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("gender type is not valid");
        }
      },
    },
  },
  { timestamps: true }
);

// userSchema.index({ emailId: 1 }, { unique: true });

const User = mongoose.model("user", userSchema);

// will create a collection name [ users ]
module.exports = User;
