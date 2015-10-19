import $ from 'jquery';
import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import Posts from "./posts";

export default React.createClass({

  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Posts />
      </div>
    );
  },
});
