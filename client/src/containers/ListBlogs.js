import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

class ListBlogs extends Component {
  state = {
    blogs: [
      {
        id: null,
        title: ""
      }
    ]
  };

  blog = () => {
    if (!this.state.blogs[0].id) {
      return <Loading />;
    }
    return this.state.blogs.map(blog => {
      return (
        <Link to={`/blog/${blog.id}`} key={blog.id}>
          <li className="list-group-item">{blog.title}</li>
        </Link>
      );
    });
  };

  async componentDidMount() {
    const allBlogs = await axios.get("/api/getAllBlogs");
    const redefinedBlogs = allBlogs.data.blogs.map(blog => {
      return { title: blog.title, id: blog._id };
    });

    this.setState({
      blogs: [...redefinedBlogs]
    });
  }

  render() {
    return (
      <div className="container jumbotron" sty>
        <div class="fixed-action-btn">
          <Link to="/newBlog" class="btn-floating btn-large blue darken-3">
            <i class="large material-icons">add</i>
          </Link>
        </div>

        <ul className="list-group">{this.blog()}</ul>
      </div>
    );
  }
}

export default ListBlogs;
