import React, { Component } from "react";
import Tags from "../components/Tags";
import { saveTags } from "../actions";
import { connect } from "react-redux";
import axios from "axios";
import constants from "../constants";
class Landing extends Component {
  state = {
    blogsByTag: [],
    isFetching: true,
    error: null
  };

  tagClickHandler = async tag => {
    await this.props.selectTags(tag);
    try {
      const blogsByTag = await axios.get(
        `/api/fetchBlogs/?tags=${this.props.tags}`
      );
      console.log(blogsByTag.data);
      this.setState({
        blogsByTag: blogsByTag.data,
        isFetching: false
      });
    } catch (error) {
      this.setState({
        isFetching: false,
        error: constants.errorMessages.SOMETHING_WENT_WRONG
      });
    }
  };

  renderBlogsHandler = () => {
    return this.state.blogsByTag.map(blog => {
      return (
        <li key={blog._id} className="collection-item">
          {blog.title}
        </li>
      );
    });
  };
  async componentDidMount() {
    await axios.get(`/api/fetchBlogs/?tags=${this.props.tags}`);
  }
  render() {
    return (
      <div>
        <Tags tagClickHandler={this.tagClickHandler} />
        {this.state.blogsByTag.length ? (
          <ul className="collection">{this.renderBlogsHandler()}</ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ tags }) => {
  return {
    tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTags: tag => {
      dispatch(saveTags(tag));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
