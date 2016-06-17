// Router methods to support both server-side and client-side rendering.

import React from "react";
import AmpersandRouter from "ampersand-router";
import $ from "jquery";
import {render} from "react-dom";
import {renderToString} from "react-dom/server";
import {each, values, clone} from "lodash";

import Page from "scripts/components/page";
import {isEntity} from "scripts/helpers/entities";
import {inBrowser} from "scripts/config";

export default AmpersandRouter.extend({
  initialize(options = {}) {
    AmpersandRouter.prototype.initialize.call(this, options);
    
    if (options.catchLinkClicks) {
      this.catchLinkClicks();
    }
  },
  
  // Catch link clicks and navigate using router to prevent page reloads.
  catchLinkClicks() {
    if (!inBrowser) { return; }
    
    $(document).on("click", "a", (event) => {
      const {currentTarget, altKey, ctrlKey, metaKey, shiftKey} = event;
      const {origin, href: fullPath} = currentTarget;
      const href = currentTarget.getAttribute("href");
      const modifiers = altKey || ctrlKey || metaKey || shiftKey;
      
      // Capture only same-origin link clicks.
      // Allow anchor links ("#header") to work. They don't cause reloads.
      // Allow modifier keys (ctrl, shift, etc) to open new tabs.
      if ((origin === location.origin) && !href.startsWith("#") && !modifiers) {
        const relativePath = fullPath.replace(origin, "");
        this.navigate(relativePath, {trigger: true});
        event.preventDefault();
      }
    });
  },
  
  // Load serialized initial data, if present.
  //
  // The server-side renderer provides a serialized representation of the first
  // routes data on window.INITIAL_DATA. This data is loaded on the first route
  // on the client so data can be shown before client-side fetches complete.
  loadInitialData(props = {}) {
    if (!inBrowser || !window.INITIAL_DATA) { return props; }
    
    const results = clone(props);
    const data = JSON.parse(window.INITIAL_DATA || "{}");
    
    // The initial data is only valid for the first route, so we clear it after load.
    window.INITIAL_DATA = null;
    
    each(results, (result, key) => {
      const value = data[key];
      if (value) {
        if (isEntity(result)) {
          result.set(value);
        } else {
          results[key] = value;
        }
      }
    });
    
    return results;
  },
  
  // Given a React component class and props, fetch all model/collection props,
  // load initial data provided by the server (if any), and renders result.
  //
  // Return a rendered result immediately -- before the fetches have completed.
  //
  // Triggers a "route-fetched" event, with completed render, once fetches complete.
  // The server-side renderer has all necessary data once this event has fired.
  fetchAndRender(Comp, props = {}) {
    const data = this.loadInitialData(props);
    const promises = values(data).filter(isEntity).map(m => m.fetch());
    
    Promise.all(promises)
      .then(() => this.trigger("route-fetched", {data, html: this.render(Comp, data)}))
      .catch(() => this.trigger("route-fetched", {err: true}));
    
    return this.render(Comp, data);
  },
  
  // Render Comp to string or to DOM depending on execution env; return result.
  render(Comp, props = {}) {
    const comp = Comp && <Comp {...props} />;
    const page = <Page>{comp}</Page>;
    
    return inBrowser
      ? render(page, document.getElementById("app"))
      : renderToString(page);
  },
  
  // Render a blank stub page which will be filled in later.
  renderStub() {
    const html = this.render();
    this.trigger("route-fetched", {data: {}, html});
    
    return html;
  },
  
  // Redirect to destination URL in either browser or server.
  //
  // Takes these options:
  // `browserOnly`: boolean, whether redirect should only happen in browser env
  // `permanent`: boolean, whether to indicate permanent redirect in server env
  redirect(destination, options) {
    return inBrowser
      ? this.redirectBrowser(destination, options)
      : this.redirectServer(destination, options);
  },
  
  redirectBrowser(destination) {
    window.location.href = destination;
  },
  
  redirectServer(destination, {browserOnly = false, permanent = false}) {
    if (browserOnly) {
      return this.renderStub();
    }
    
    this.trigger("route-fetched", {redirect: {destination, permanent}});
  },
});
