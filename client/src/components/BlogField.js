//This component contain logic for the fields contained in the newBlog form
import React from "react";
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="">
      <label>{label}</label>
      {input.name === "body" ? (
        <textarea
          {...input}
          id=""
          cols="30"
          rows="50"
          style={{ marginTop: "5px" }}
        />
      ) : (
        <input {...input} type="text" style={{ marginTop: "5px" }} />
      )}
      <div
        className="red-text"
        style={{
          marginBottom: "20px"
        }}
      >
        {touched && error}
      </div>
    </div>
  );
};
