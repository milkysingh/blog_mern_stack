import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import blogField from "../components/BlogField";
import { Link } from "react-router-dom";
import formFields from "../constants";
class NewBlog extends Component {
  renderFields = () => {
    return (
      <div>
        {formFields.BLOGFIELDS.map(blog => (
          <Field
            key={blog.name}
            name={blog.name}
            label={blog.label}
            type="text"
            component={blogField}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmitHandler)}>
        {this.renderFields()}
        <button className="teal btn-flat right white-text" type="submit">
          submit
          <i className="material-icons right">arrow_forward</i>
        </button>
        <Link to="/allBlogs" className="red btn-flat white-text" style={{}}>
          cancel
        </Link>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  formFields.BLOGFIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "You must not leave this field empty";
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "blogForm",
  destroyOnUnmount: false
})(NewBlog);
