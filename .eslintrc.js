module.exports = {
  "extends": "bitmatica",
  
  "parser": "babel-eslint",
  
  "globals": {
    // CONTEXT object is inserted during build process. It's read-only.
    "CONTEXT": false,
  },
  
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "app"],
      },
    },
  },
};
