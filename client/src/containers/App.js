import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import NewBlog from "./NewBlog";
import ListBlogs from "./ListBlogs";
import Landing from "./Landing";
import Blog from "./Blog";
import { connect } from "react-redux";
import * as actions from "../actions";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path={"/"} component={Landing} />
            <Route path={"/newBlog"} component={NewBlog} />
            <Route path={"/myBlogs"} component={ListBlogs} />
            <Route path={"/blog/:id"} component={Blog} />
          </div>
        </BrowserRouter>
        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(actions.fetchUser());
    }
  };
};
export default connect(null, mapDispatchToProps)(App);
