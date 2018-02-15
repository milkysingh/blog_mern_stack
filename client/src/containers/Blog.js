import React, { Component } from "react";
import axios from "axios";
import Loading from "../components/Loading";

class Blog extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    createdAt: null
  };

  renderBlog = () => {
    if (!this.state.title) {
      return <Loading />;
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>
          <i>{this.state.body}</i>
        </p>
      </div>
    );
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `/api/fetchBlog/${this.props.match.params.id}`
      );
      console.log(data);
      this.setState({
        id: data._id,
        title: data.title,
        body: data.body,
        author: data.author.name || ""
      });
    } catch (error) {
      return null;
    }
  }

  render() {
    return <div>{this.renderBlog()}</div>;
  }
}

export default Blog;
