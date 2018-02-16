const MongoServices = require("../services/mongoservices");
const requireLoginMiddleware = require("../middlewares/requireLogin");
module.exports = app => {
  app.get("/api/getAllBlogs", requireLoginMiddleware, async (req, res) => {
    const blogs = await MongoServices.getAllBlogs(req.user._id);
    res.send(blogs);
  });
  app.post("/api/newBlog", requireLoginMiddleware, async (req, res) => {
    const { title, body } = req.body;
    const newBlog = {
      title,
      body,
      id: "5a829b0d9acd20105a608fbb"
    };
    const blog = await MongoServices.addNewBlog(newBlog);
    if (blog) {
      return res.status(200).send(blog);
    }
    res.status(400).send("Something went wrong");
  });
  app.get("/api/fetchBlog/:id", async (req, res) => {
    const blogId = req.params.id;
    const blog = await MongoServices.findBlog(blogId);

    res.send(blog);
  });

  app.delete("/api/deleteBlog/:id", async (req, res) => {
    console.log("id :", req.params.id);
    const response = MongoServices.removeBlog(req.params.id);
    res.status(200).send({ success: "Blog has been sucessully removed" });
  });
};
