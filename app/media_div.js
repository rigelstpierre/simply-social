import React from "react";

export default React.createClass({
  render() {
    return (
      <div className="media">
        <img src={ require('./img/' + this.props.media + '.png') } />
      </div>
    );
  },
});
