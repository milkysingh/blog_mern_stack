import React from "react";
import { func } from "prop-types";

export default class FileInput extends React.Component {
  static propTypes = {
    handleImageChange: func.isRequired
  };
  render() {
    return <input type="file" onChange={this.props.handleImageChange} />;
  }
}
