const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  date: String, // Store as a string or use Date type
  slug: { type: String, unique: true }, // Unique slug for blog URLs
});

module.exports = mongoose.model("Blog", blogSchema);
