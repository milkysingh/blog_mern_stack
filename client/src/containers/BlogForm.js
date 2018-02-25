import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import blogField from "../components/BlogField";
import { Link } from "react-router-dom";
import formFields from "../constants";
import Cover from "../components/Cover";
import InputFile from "./InputFile";
import DropDown from "../components/DropDown";

class NewBlog extends Component {
  state = {
    selectedImage: null
  };
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

  renderTagsDropdown = () => {
    return formFields.TAGS.map(tag => {
      return (
        <option key={tag} value={tag}>
          {tag}
        </option>
      );
    });
  };
  onFileSelectHandler = e => {
    console.log(e.target.value);
    this.setState({ selectedImage: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmitHandler)}>
        {this.renderFields()}
        <label>tags</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">Blue</option>
          </Field>
        </div>

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
