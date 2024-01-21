// backend/db.js
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://abhirajsinha25:AbhirajMongodb@cluster0.7dglxng.mongodb.net/"
);

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
