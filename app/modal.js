import React from "react";

export default React.createClass({

  componentDidMount: function() {
    window.addEventListener('mousedown', this._pageClick, false);
    // this._getActivityDetails();
  },

  componentWillUnmount: function() {
    window.removeEventListener('mousedown', this._pageClick, false);
  },

  _pageClick(e) {


  },

  _handleClickEvent(e) {
    e.preventDefault();
    this.props.toggleModal();
  },

  render() {
    return (
      <div className="modal-container">
        <div className="new-message">
          <a href="#" className="close-btn" onClick={ this._handleClickEvent }></a>
          <h4>Create new message</h4>
          <form>
            <textarea name="message"></textarea>
             <ul className="add-media-nav">
              <li className="photo"><a href="#">Add Photo</a></li>
              <li className="video"><a href="#">Add Video</a></li>
            </ul>
            <input type="submit" value="Post" />
          </form>
        </div>
      </div>
    );
  },
});
