import React from "react";

import logo from "images/logo.png";

export default React.createClass({
  displayName: "Page Header",
  
  render() {
    return (
      <nav>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </nav>
    );
  },
});
