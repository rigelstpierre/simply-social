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
    this.setState({ 'selected': e.target.getAttribute('data-value') })
  },

  render() {
    var tabs = this.props.data.map(function (item, i) {
      var selected = item == this.state.selected ? 'selected' : '';
      return (
        <li onClick={ this._handleClickEvent } className={ selected } key={ i }>
          <a href="#" data-value={ item }>{ item }</a>
        </li>
      );
    }, this);

    return (
     <section className="view-nav">
      <ul className="nav">
       { tabs }
      </ul>
     </section>
    );
  },
});
