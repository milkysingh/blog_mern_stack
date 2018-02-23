const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: String,
  body: String,
  author: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: Date,
  tags: String
});
const Blog = mongoose.model("blogs", blogSchema);
