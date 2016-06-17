import BaseRouter from "scripts/routes/base";

import HomePage from "scripts/components/home/page";
import ConfigurationPage from "scripts/components/example/configuration_page";
import LibraryListPage from "scripts/components/example/library_list_page";
import StyleGuidePage from "scripts/components/example/style_guide_page";
import NotFoundPage from "scripts/components/not_found/page";

import Libraries from "scripts/collections/libraries";

export default BaseRouter.extend({
  routes: {
    "": "home",
    
    // Examples
    "example/libraries": "libraries",
    "example/configuration": "configuration",
    "example/style_guide": "styleGuide",
    
    "*unmatched": "unmatched",
  },
  
  home() {
    return this.fetchAndRender(HomePage);
  },
  
  libraries() {
    const libraries = new Libraries([
      {
        name: "React",
        role: "views",
        link: "https://facebook.github.io/react/",
      },
      {
        name: "Ampersand",
        role: "models, collections, and router",
        link: "https://ampersandjs.com/",
      },
      {
        name: "Lodash",
        role: "utility library",
        link: "https://lodash.com/",
      },
      {
        name: "Sass",
        role: "style preprocessor",
        link: "http://sass-lang.com/",
      },
      {
        name: "Bootstrap v4",
        role: "frontend framework",
        link: "http://v4-alpha.getbootstrap.com/",
      },
      {
        name: "npm",
        role: "dependency management",
        link: "https://www.npmjs.com/",
      },
      {
        name: "Webpack",
        role: "module bundler",
        link: "https://webpack.github.io/",
      },
    ]);
    
    return this.fetchAndRender(LibraryListPage, {libraries});
  },
  
  configuration() {
    return this.fetchAndRender(ConfigurationPage);
  },
  
  styleGuide() {
    return this.fetchAndRender(StyleGuidePage);
  },
  
  unmatched() {
    return this.fetchAndRender(NotFoundPage);
  },
});
