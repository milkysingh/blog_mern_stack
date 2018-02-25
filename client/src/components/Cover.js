import React from "react";

const Avatar = props => (
  <label>
    <img src={props.value} alt="profile" height="100" width="100" />
  </label>
);

export default Avatar;
