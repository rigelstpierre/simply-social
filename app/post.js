import React from "react";
import MediaDiv from './media_div';
import Comments from './comments';

export default React.createClass({
  createMarkup() {
    return {__html: this.props.data['content']};
  },

  _renderMedia() {
    var mediaDiv;
    if (this.props.data['mediaPath'] != null) {
      mediaDiv = <MediaDiv media={ this.props.data['mediaPath'] } />
    };

    return mediaDiv;
  },

  _renderComments() {
    var comments;

    if (this.props.data['comments'].length > 0) {
      comments = <Comments data={ this.props.data['comments'] } />
    };

    return comments;
  },

  render() {
    var postClasses = this.props.data['mediaPath'] != null ? 'post has-media' : 'post';
    return (
      <div className={ postClasses }>
        <img src={ require('./img/avatars/' + this.props.data['avatarName'] + '.png') } className="avatar" />
        <div className="content">
          <h2>{ this.props.data['author'] }</h2>
          <p dangerouslySetInnerHTML={ this.createMarkup() } />
        </div>
        { this._renderComments() }
        <div className="meta">
          <ul>
            <li><a href="#" className="reply"></a></li>
            <li><a href="#" className="like"></a></li>
            <li><a href="#">{ this.props.data['timeSincePosted'] }</a></li>
          </ul>
        </div>
        { this._renderMedia() }
      </div>
    );
  },
});
