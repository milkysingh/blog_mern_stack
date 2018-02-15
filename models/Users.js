const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  googleID: String,
  profilePicture: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: "blogs" }]
});
const User = mongoose.model("users", userSchema);
