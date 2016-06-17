import React from "react";

import compStyles from "styles/components/home/page.scss";
import linkStyles from "styles/shared/links.scss";

export default React.createClass({
  displayName: "Home Page",
  
  render() {
    return (
      <div>
        <h1>Bitmatica Web App Boilerplate</h1>
        
        <p>Welcome to the beginning of your beautiful web app!</p>
        
        <section className={compStyles.section}>
          <h3>Some Pages to Check Out</h3>
          
          <ul className={compStyles.nestedList}>
            <li>
              <a href="example/libraries" className={linkStyles.underline}>Libraries</a>
              <ul>
                <li className={compStyles.metaItem}>Demonstrates:</li>
                <li>Ampersand Models</li>
                <li>Ampersand Collections</li>
                <li>Ajax</li>
              </ul>
            </li>
            
            <li>
              <a href="example/style_guide" className={linkStyles.underline}>Style Guide</a>
              <ul>
                <li className={compStyles.metaItem}>Demonstrates:</li>
                <li>Third-Party Styles (e.g. Bootstrap)</li>
                <li>First-Party Styles</li>
                <li>CSS Modules</li>
              </ul>
            </li>
            
            <li>
              <a href="example/configuration" className={linkStyles.underline}>Configuration</a>
              <ul>
                <li className={compStyles.metaItem}>Demonstrates:</li>
                <li>Environments (development, staging, or production)</li>
                <li>Platform (browser or server)</li>
                <li>Universal/Isomorphic Archictecture (same code in server and browser)</li>
                <li>Build Context</li>
              </ul>
            </li>
            
            <li>
              <a href="example/foo" className={linkStyles.underline}>404 Page</a>
              <ul>
                <li className={compStyles.metaItem}>Demonstrates:</li>
                <li>Ampersand Router</li>
              </ul>
            </li>
          </ul>
        </section>
        
        
        <section>
          <h3>Next Steps</h3>
          
          <ol className={compStyles.nestedList}>
            <li>Set Name
              <ol>
                <li>Set <code>name</code> in <code>package.json</code></li>
                <li>Set <code>title</code> in <code>app/index.html</code></li>
                <li>Set <code>title</code> in <code>app/templates/index.mustache</code></li>
                <li>Set <code>appName</code> in <code>app/scripts/config/index.js</code></li>
              </ol>
            </li>
            
            <li>Set Branding
              <ol>
                <li>Set <code>app/static/favicon.ico</code></li>
                <li>Set <code>app/images/logo.png</code></li>
              </ol>
            </li>
            
            <li>Configure <code>package.json</code>
              <ol>
                <li>Set <code>name</code></li>
                <li>Set <code>description</code></li>
                <li>Set <code>version</code></li>
                <li>Set <code>repository</code></li>
                <li>Set <code>license</code></li>
              </ol>
            </li>
            
            <li>Upgrade Dependencies
              <ol>
                <li>Run <code>npm install -g npm-check-updates</code> to install <code>ncu</code></li>
                <li>Run <code>ncu</code> to check for updates</li>
                <li>Run <code>ncu -u -a</code> to write changes to <code>package.json</code>, if everything looks good</li>
              </ol>
            </li>
            
            <li>Remove Example Content
              <ol>
                <li>Remove <code>app/scripts/models/library.js</code></li>
                <li>Remove <code>app/scripts/collections/library.js</code></li>
                <li>Remove <code>app/scripts/components/example/*</code></li>
                <li>Remove <code>app/styles/components/example/*</code></li>
                <li>Remove <code>app/images/example/*</code></li>
                <li>Remove example routes in <code>app/scripts/routes/router.js</code></li>
              </ol>
            </li>
          </ol>
        </section>
      </div>
    );
  },
});
