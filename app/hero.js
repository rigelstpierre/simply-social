import React from "react";
import NewMessage from "./new_message";
import ViewNav from "./view_nav";

export default React.createClass({
  render() {
    return (
     <section className="hero">
      <NewMessage />
      <ViewNav
        selected={ 'All Posts' }
        data={ ['All Posts', 'Photos', 'Video'] }
      />
     </section>
    );
  },
});
