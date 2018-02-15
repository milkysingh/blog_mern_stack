import React from "react";
import { connect } from "react-redux";
import fields from "../constants";

import axios from "axios";
import { withRouter } from "react-router-dom";
const BlogFormReview = ({ onCancel, formValues, history }) => {
  const uploadBlog = async values => {
    const res = await axios.post("/api/newBlog", values);
    console.log(res);
    history.push("/allBlogs");
  };

  const renderFields = () => {
    return fields.BLOGFIELDS.map(({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>
            <h4>{formValues[label]}</h4>
          </div>
          <label>{name}</label>
          <div>
            <h5>{formValues[name]}</h5>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h4>Review Blog </h4>
      {renderFields()}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        back
      </button>
      <button
        onClick={() => uploadBlog(formValues)}
        className="blue darken-3 btn-flat right"
      >
        Submit Blog <i className="material-icons right">done</i>
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return { formValues: state.form.blogForm.values };
};

export default connect(mapStateToProps)(withRouter(BlogFormReview));
