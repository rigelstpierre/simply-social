import React from "react";

export default React.createClass({
  _renderPlayBtn() {
    var playBtn;
    if (this.props.mediaType === 'video') {
      return (
        <div className="playBtn"></div>
      );
    }

  },

  render() {
    return (
      <div className="media">
        { this._renderPlayBtn() }
        <img src={ require('./img/' + this.props.media + '.png') } />
      </div>
    );
  },
});
