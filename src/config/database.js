const mongoose = require("mongoose");
const uri = "mongodb+srv://tony:tony%401234@web-cluster.yfejm.mongodb.net";
const dbName = "devTinder";
const connectDB = async () => {
  await mongoose.connect(`${uri}/${dbName}`);
};

module.exports = connectDB;
