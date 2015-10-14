import $ from 'jquery';
import React from "react";

export default React.createClass({

  getInitialState() {
    return {
      selected: this.props.selected
    };
  },

  _handleClickEvent(e) {
    e.preventDefault();
    $(".nav>li.active").removeClass("selected");
  },

  render() {
    return (
     <section className="view-nav">
      <ul className="nav">
        <li className="selected" onClick={ this._handleClickEvent }><a href="#">All Posts</a></li>
        <li onClick={ this._handleClickEvent }><a href="#">Photos</a></li>
        <li onClick={ this._handleClickEvent }><a href="#">Videos</a></li>
      </ul>
     </section>
    );
  },
});
