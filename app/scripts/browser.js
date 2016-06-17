// Polyfill ES2015+ standard library.
import "babel-polyfill";

import App from "ampersand-app";

import Router from "scripts/routes/router";
import initPromises from "scripts/config/promises";

import "styles/main.scss";

function init() {
  initPromises({ a: 1 });
  
  App.router = new Router({catchLinkClicks: true});
  App.router.history.start();
}

init();
