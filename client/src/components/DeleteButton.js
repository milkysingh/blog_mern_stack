import React from "react";
import PropTypes from "prop-types";

const DeleteButton = props => {
  return (
    <div>
      <button
        onClick={props.onDeleteBlog}
        className="btn btn-flat red darken-3"
      >
        <i className="delete">delete blog</i>
      </button>
    </div>
  );
};

DeleteButton.propTypes = {
  onDeleteBlog: PropTypes.func.isRequired
};

export default DeleteButton;
