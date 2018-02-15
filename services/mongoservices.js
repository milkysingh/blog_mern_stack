const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const User = mongoose.model("users");
const Blog = mongoose.model("blogs");
const findUser = payload => {
  return User.findOne(payload);
};
const addNewUser = payload => {
  const data = {
    name: payload.name,
    email: payload.email,
    googleID: payload.googleID
  };
  return new User(data).save();
};
const updateUserAfterBlog = async (criteria, condition) => {
  await User.findByIdAndUpdate(
    criteria,
    { $push: { blogs: condition } },
    { new: true }
  );
};
const getAllBlogs = async payload => {
  //write code to get all blogs

  return await User.findOne({ _id: payload })
    .populate({
      path: "blogs"
    })
    .select({ blogs: 1, _id: 0 });

  //   const blogs = await User.aggregate([
  //     { $match: { _id: ObjectId("5a76b9f01b09b10a8886acbf") } },
  //     {
  //       $lookup: {
  //         from: "blogs",
  //         localField: "_id",
  //         foreignField: "author",
  //         as: "userBlogs"
  //       }
  //     }
  // {
  //   $project: {
  //     userBlogs: 1,
  //     _id: 0
  //   }
  // }
  //   ]);
};

const addNewBlog = async payload => {
  const blog = await new Blog({
    title: payload.title,
    body: payload.body,
    author: payload.id,
    createdAt: Date.now()
  }).save();
  await updateUserAfterBlog({ _id: payload.id }, blog._id);
  console.log("blog");
  return blog;
};

const findBlog = async payload => {
  try {
    const blog = await Blog.findById(payload).populate("author", {
      name: 1,
      _id: 0
    });

    return blog;
    0;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  findUser,
  addNewUser,
  addNewBlog,
  getAllBlogs,
  findBlog
};
