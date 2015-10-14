import React from "react";
import Hero from "./hero";

export default React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <div className="container">
            <div className="logo">
              <img src={ require('./img/logo.png') } />
              <h1>simply<span>social</span></h1>
            </div>
          </div>
        </nav>
        <Hero />
      </div>
    );
  },
});
