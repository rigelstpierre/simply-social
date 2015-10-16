import $ from 'jquery';
import React from "react";
import Modal from "./modal";

export default React.createClass({

  getInitialState() {
    return {
      showModal: false
    };
  },

  _handleClickEvent(e) {
    e.preventDefault();
    this._toggleModal();
  },

  _toggleModal() {
    this.setState({ 'showModal': !this.state.showModal })
  },


  _renderModal() {
    if (this.state.showModal) {
      return <Modal toggleModal={ this._toggleModal } />
    };
  },

  render() {
    return (
      <div>
        <nav>
          <div className="container">
            <div className="logo">
              <img src={ require('./img/logo.png') } />
              <h1>simply<span>social</span></h1>
            </div>
            <div className="social-controls">
              <a className="new-message" href="#" onClick={ this._toggleModal }></a>
            </div>
          </div>
        </nav>
        { this._renderModal() }
      </div>
    );
  },
});
