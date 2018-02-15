import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Header extends Component {
  contentRenderer = () => {
    switch (this.props.auth) {
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      case null:
        return null;
      default:
        return [
          <li key={1} style={{ margin: "0 10px" }}>
            <Link to="/newBlog">create new blog</Link>
          </li>,
          <li key={2}>
            <a href="/api/logout">logout</a>
          </li>
        ];
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper #0d47a1 blue darken-4">
          <Link
            to={this.props.auth ? "/allBlogs" : "/"}
            className="left brand-logo"
          >
            Blogify
          </Link>
          <ul className="right">{this.contentRenderer()}</ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Header);
