import React from "react";

import Libraries from "scripts/collections/libraries";
import LibraryListItem from "scripts/components/example/library_list_item";
import Title from "scripts/components/shared/title";

import compStyles from "styles/components/example/library_list.scss";

export default React.createClass({
  displayName: "Libraries List Page",
  
  propTypes: {
    libraries: React.PropTypes.instanceOf(Libraries).isRequired,
  },
  
  renderLibrary(library) {
    return <LibraryListItem library={library} key={library.cid} />;
  },
  
  render() {
    const {libraries} = this.props;
    const libs = libraries.isEmpty()
      ? <span className="empty">No libraries found.</span>
      : libraries.map(this.renderLibrary);
    
    return (
      <div>
        <Title title="Libraries" />
        
        <h1>Libraries</h1>
        
        <p>Links to some of the libraries used in this app.</p>
        
        <div className={compStyles.list}>
          {libs}
        </div>
      </div>
    );
  },
});
