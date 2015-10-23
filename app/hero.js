import React from "react";
import NewMessage from "./new_message";
import ViewNav from "./view_nav";

export default React.createClass({
  _filterContent(viewName) {
    this.props.filterPosts(viewName)
  },

  render() {
    return (
     <section className="hero">
      <NewMessage />
      <ViewNav
        selected={ 'All Posts' }
        data={ ['All Posts', 'Photos', 'Videos'] }
        filterContent={ this._filterContent }
      />
     </section>
    );
  },
});
