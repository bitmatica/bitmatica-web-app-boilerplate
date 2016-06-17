import React from "react";
import cx from "classnames";

import Title from "scripts/components/shared/title";
import * as env from "scripts/config";

import bootstrapStyles from "styles/shared/bootstrap.scss";

export default React.createClass({
  displayName: "Configuration Page",
  
  renderRow({label, key}) {
    return (
      <tr key={key}>
        <td>{label}</td>
        <td><code>{env[key]}</code></td>
      </tr>
    );
  },
  
  render() {
    const fields = [
      {label: "Environment", key: "env"},
      {label: "Platform", key: "platform"},
      {label: "Version", key: "version"},
      {label: "Last Git Commit", key: "commit"},
      {label: "App Name", key: "appName"},
      {label: "Backend Server URL", key: "backendURL"},
    ];
    
    const rows = fields.map(this.renderRow);
    
    return (
      <div>
        <Title title="Configuration" />
        
        <h1>Configuration</h1>
        
        <p>App configuration, including contextual information provided by build</p>
        
        <table className={cx(bootstrapStyles.table, bootstrapStyles["table-striped"])}>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  },
});
