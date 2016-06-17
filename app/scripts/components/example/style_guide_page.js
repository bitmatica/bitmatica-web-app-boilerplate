import React from "react";
import cx from "classnames";

import Title from "scripts/components/shared/title";

import compStyles from "styles/components/example/style_guide.scss";
import bootstrapStyles from "styles/shared/bootstrap.scss";

import jpgImg from "images/example/plane.jpg";
import pngImg from "images/example/plane.png";
import svgImg from "images/example/plane.svg";

export default React.createClass({
  displayName: "Style Guide Page",
  
  render() {
    return (
      <div>
        <Title title="Style Guide" />
        
        <h1>Style Guide</h1>
        
        <p>Demonstrates the usage of third-party styles (e.g. Bootstrap), first-party styles, and CSS modules.</p>
        
        <p>To see a more extensive style guide, run <code>npm run styleguide-server</code> and visit <a href="http://localhost:3030">http://localhost:3030</a>.</p>
        
        
        <h3 className={compStyles.header}>Headers</h3>
        
        <section className={compStyles.section}>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
          <p>Paragraph for comparison</p>
        </section>
        
        
        <h3 className={compStyles.header}>Lists</h3>
        
        <section className={compStyles.section}>
          <ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ul>
          
          <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ol>
        </section>
        
        
        <h3 className={compStyles.header}>Buttons</h3>
        
        <section className={compStyles.section}>
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-primary"])}
          >
            Primary
          </button>
          
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-secondary"])}
          >
            Secondary
          </button>
          
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-success"])}
          >
            Success
          </button>
          
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-info"])}
          >
            Info
          </button>
          
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-warning"])}
          >
            Warning
          </button>
          
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-danger"])}
          >
            Danger
          </button>
          
          <button
            type="button"
            className={cx(bootstrapStyles.btn, bootstrapStyles["btn-link"])}
          >
            Link
          </button>
        </section>
        
        
        <h3 className={compStyles.header}>Custom Styles</h3>
        
        <section className={compStyles.section}>
          <a href="/" className={compStyles.underline}>Underline Link</a>
          <button type="button" className={compStyles.glowButton}>Glow Button</button>
        </section>
        
        
        <h3 className={compStyles.header}>Images</h3>
        
        <section className={compStyles.section}>
          <img src={jpgImg} className={compStyles.image} alt="Example JPG" />
          <img src={pngImg} className={compStyles.image} alt="Example PNG" />
          <img src={svgImg} className={compStyles.image} alt="Example SVG" />
        </section>
      </div>
    );
  },
});
