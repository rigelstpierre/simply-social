import $ from 'jquery';
import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import Posts from "./posts";

export default React.createClass({
  getInitialState() {
    return {
      postView: 'All Posts'
    };
  },

  _updatePostView(viewName) {
    this.setState({ 'postView': viewName })
  },

  render() {
    return (
      <div>
        <Nav />
        <Hero filterPosts={ this._updatePostView } />
        <Posts postView={ this.state.postView } />
      </div>
    );
  },
});
