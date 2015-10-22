import $ from 'jquery';
import React from "react";
import classNames from 'classnames'

export default React.createClass({
  getInitialState() {
    return {
      showComments: false
    };
  },

  createMarkup(markup) {
    return {__html: markup};
  },

  _clickEventHandler(e) {
    e.preventDefault();
    this.setState({ 'showComments': !this.state.showComments })
  },

  _renderComments() {
    self = this
    var comments = this.props.data.map(function (comment, index) {
      return (
        <div className="comment" key={ index }>
          <img src={ require('./img/avatars/' + comment['avatarName'] + '.png') } className="avatar" />
          <h2>{ comment['author'] }</h2>
          <p dangerouslySetInnerHTML={ self.createMarkup(comment['content']) } />
          <div className="meta">
            <ul>
              <li><a href="#" className="reply"></a></li>
              <li><a href="#" className="like"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>
      )
    });

    return comments;
  },

  render() {
    var toogleText = this.state.showComments == false ? 'Expand' : 'Collapse';
    var selected = this.state.showComments ? 'selected' : '';
    var comments;
    if (this.state.showComments) {
      comments = this._renderComments()
    };
    return (
      <div className="comments-container">
        <a href="#" className={ classNames('expand', { 'expanded' : this.state.showComments }) } onClick={ this._clickEventHandler }>
          { toogleText }
        </a>
        <div className="comments">
          { comments }
          <div className={ classNames('comment-reply', { 'show' : this.state.showComments }) }>
            <form >
              <input name="reply" placeholder="Reply..." />
            </form>
          </div>
        </div>
      </div>
    );
  },
});
