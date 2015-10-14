import React from "react";

export default React.createClass({
  render: function() {
    return (
     <section className="new-message">
      <input type="text" placeholder="What’s on your mind?" />
      <ul>
        <li className="photo"><a href="#">Add Photo</a></li>
        <li className="video"><a href="#">Add Video</a></li>
      </ul>
     </section>
    );
  },
});
