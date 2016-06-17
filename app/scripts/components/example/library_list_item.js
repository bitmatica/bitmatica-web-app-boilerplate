import React from "react";

import Library from "scripts/models/library";

import compStyles from "styles/components/example/library_list.scss";

export default React.createClass({
  displayName: "Library List Item",
  
  propTypes: {
    library: React.PropTypes.instanceOf(Library).isRequired,
  },
  
  render() {
    const {library} = this.props;
    const {name, role, link} = library;
    
    return (
      <a href={link} className={compStyles.item}>
        <span className={compStyles.name}>{name}</span>
        <span className={compStyles.role}>{role}</span>
      </a>
    );
  },
});
