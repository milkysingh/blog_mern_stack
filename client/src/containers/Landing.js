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
  TAGS = [];
  fetchBlogsByTag = async () => {
    try {
      const blogsByTag = await axios.get(`/api/fetchBlogs/?tags=${this.TAGS}`);

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
  tagClickHandler = async newTag => {
    const tagExist = this.TAGS.findIndex(tag => {
      return tag === newTag;
    });
    if (tagExist === -1) {
      this.TAGS.push(newTag);
    } else {
      this.TAGS.splice(tagExist, 1);
    }

    this.fetchBlogsByTag();
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
    this.TAGS = [...this.props.tags];
    this.fetchBlogsByTag();
  }
  componentWillUnmount() {
    this.props.selectTags(this.TAGS);
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
