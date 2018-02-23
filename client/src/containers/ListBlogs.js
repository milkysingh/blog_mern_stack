import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import classes from "../css/list.css";
import constants from "../constants";
class ListBlogs extends Component {
  state = {
    blogs: [],
    isFetching: true,
    error: null
  };

  renderBlogList = () => {
    if (this.state.isFetching) {
      return <Loading />;
    }
    if (this.state.error) {
      return this.state.error;
    }
    return this.state.blogs.map(blog => {
      return (
        <Link
          to={`/blog/${blog.id}`}
          key={blog.id}
          style={{ textDecoration: "none" }}
          className={classes.ListItem}
        >
          <li>
            <h3>{blog.title}</h3>
          </li>
        </Link>
      );
    });
  };

  async componentDidMount() {
    try {
      const allBlogs = await axios.get("/api/myBlogs");

      const redefinedBlogs = allBlogs.data.blogs.map(blog => {
        return { title: blog.title, id: blog._id };
      });

      this.setState({
        blogs: [...redefinedBlogs],
        isFetching: false
      });
    } catch (error) {
      this.setState({
        error: constants.errorMessages.SOMETHING_WENT_WRONG
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="fixed-action-btn">
          <Link to="/newBlog" className="btn-floating btn-large blue darken-3">
            <i className="large material-icons">add</i>
          </Link>
        </div>
        <div className={classes.List}>{this.renderBlogList()}</div>
      </div>
    );
  }
}

export default ListBlogs;
