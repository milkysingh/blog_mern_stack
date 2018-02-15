import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import NewBlog from "./NewBlog";
import ListBlogs from "./ListBlogs";
import Landing from "../components/Landing";
import Blog from "./Blog";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path={"/"} component={Landing} />
            <Route path={"/newBlog"} component={NewBlog} />
            <Route path={"/allBlogs"} component={ListBlogs} />
            <Route path={"/blog/:id"} component={Blog} />
          </div>
        </BrowserRouter>
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
