import React, { Component } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import DeleteButton from "../components/DeleteButton";
import constants from "../constants";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
class Blog extends Component {
  state = {
    blog: {},
    isFetching: true,
    error: null
  };

  renderBlog = () => {
    if (this.state.isFetching) {
      return <Loading />;
    }
    if (this.state.error) {
      Alert.error("Test message 3", {
        position: "bottom-right",
        effect: "slide",
        timeout: "none"
      });
    }
    return (
      <div>
        <h1>{this.state.blog.title}</h1>
        <p>
          <i>{this.state.blog.body}</i>
        </p>
      </div>
    );
  };

  deleteBlog = async () => {
    try {
      await axios.delete(`/api/deleteBlog/${this.props.match.params.id}`);
      this.props.history.push("/myBlogs");
    } catch (error) {
      alert("Something went wrong!!");
    }
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `/api/fetchBlog/${this.props.match.params.id}`
      );
      console.log(data);
      const blog = {
        id: data._id,
        title: data.title,
        body: data.body,
        author: data.author.name || ""
      };
      this.setState({
        blog,
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
      <div>
        {this.renderBlog()}
        {this.state.isFetching || this.state.error ? (
          ""
        ) : (
          <DeleteButton onDeleteBlog={this.deleteBlog} />
        )}
      </div>
    );
  }
}

export default Blog;
