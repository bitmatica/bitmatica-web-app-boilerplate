import React from "react";

import Header from "scripts/components/page/header";
import Footer from "scripts/components/page/footer";
import Title from "scripts/components/shared/title";

import compStyles from "styles/components/page/index.scss";
import bootstrapStyles from "styles/shared/bootstrap.scss";

export default React.createClass({
  displayName: "Page",
  
  propTypes: {
    children: React.PropTypes.node,
  },
  
  render() {
    return (
      <Title>
        <div className={compStyles.page}>
          <header className={compStyles.header}>
            <div className={bootstrapStyles.container}><Header /></div>
          </header>
          
          <main className={compStyles.content}>
            <div className={bootstrapStyles.container}>{this.props.children}</div>
          </main>
          
          <footer className={compStyles.footer}>
            <div className={bootstrapStyles.container}><Footer /></div>
          </footer>
        </div>
      </Title>
    );
  },
});
