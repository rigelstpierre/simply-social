import React from "react";
import MediaDiv from './media_div';

export default React.createClass({

  render() {
    var postClasses = this.props.data['mediaPath'] != null ? 'post has-media' : 'post';
    var mediaDiv;
    if (this.props.data['mediaPath'] != null) {
      mediaDiv = <MediaDiv media={ this.props.data['mediaPath'] } />
    };
    return (
      <div className={ postClasses }>
        <img src={ require('./img/avatars/' + this.props.data['avatarName'] + '.png') } className="avatar" />
        <div className="content">
          <h2>{ this.props.data['author'] }</h2>
          <p>{ this.props.data['content'] }</p>
          <a href="#" className="expand">Expand</a>
        </div>
        <div className="meta">
          <ul>
            <li><a href="#" className="reply"></a></li>
            <li><a href="#" className="like"></a></li>
            <li><a href="#">{ this.props.data['timeSincePosted'] }</a></li>
          </ul>
        </div>
        { mediaDiv }
      </div>
    );
  },
});
