import React from "react";

export default React.createClass({
  render() {
    return (
     <section className="new-message">
      <input type="text" placeholder="What’s on your mind?" />
      <ul className="add-media-nav">
        <li className="photo"><a href="#">Add Photo</a></li>
        <li className="video"><a href="#">Add Video</a></li>
      </ul>
     </section>
    );
  },
});
