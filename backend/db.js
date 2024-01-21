// backend/db.js
const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");

// Connect to MongoDB
mongoose.connect(MONGODB_URL);

// Create a Schema for Users
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
