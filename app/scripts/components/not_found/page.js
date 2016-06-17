import React from "react";

import Title from "scripts/components/shared/title";

export default React.createClass({
  displayName: "Not Found Page",
  
  render() {
    return (
      <div className="home-page">
        <Title title="Page Not Found (404)" />
        
        <h1>Hmm, we couldn't seem to find that page</h1>
        
        <p>Perhaps the page moved. Or maybe it never existed at all!</p>
        
        <p>Either way, we've made a note that you arrived here and we'll see if we can prevent it from happening in the future.</p>
        
        <p>Return to the <a href="/">home page</a> to get back on track.</p>
      </div>
    );
  },
});
