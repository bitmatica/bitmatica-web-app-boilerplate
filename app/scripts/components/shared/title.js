import React from "react";
import DocumentTitle from "react-document-title";

import {appName} from "scripts/config";

export default React.createClass({
  displayName: "Title",
  
  propTypes: {
    title: React.PropTypes.string,
    children: React.PropTypes.node,
  },
  
  render() {
    const {title, children} = this.props;
    const combined = title ? `${title} | ${appName}` : appName;
    
    return <DocumentTitle title={combined}>{children}</DocumentTitle>;
  },
});
