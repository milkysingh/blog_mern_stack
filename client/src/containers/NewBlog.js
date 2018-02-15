import React, { Component } from "react";
import BlogForm from "./BlogForm";
import BlogFormReview from "../components/BlogFormReview";
import { reduxForm } from "redux-form";
class NewBlog extends Component {
  state = {
    showFormReview: false
  };
  toggleVisibility = () => {
    this.setState(prevState => {
      return {
        showFormReview: !prevState.showFormReview
      };
    });
  };
  renderContent = () => {
    if (this.state.showFormReview) {
      console.log("hwllo");
      return (
        <BlogFormReview
          onCancel={() => {
            this.toggleVisibility();
          }}
        />
      );
    }
    return <BlogForm onSubmitHandler={this.toggleVisibility} />;
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "blogForm"
})(NewBlog);
