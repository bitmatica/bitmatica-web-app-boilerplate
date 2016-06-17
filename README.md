Bitmatica Web App Boilerplate
=============================

Over the years, the [Bitmatica](http://www.bitmatica.com/) team has tried many technologies and we've gradually assembled a "best practice" contemporary web app stack that we believe is stable, powerful, and production-ready.

This project provides an example of these chosen technologies wired up and working together.

With a few customizations, this could serve as great initial commit for your next web app.


Technologies
------------

Some of the most important components of the stack include:

| Category | Role           | Technology                                              |
|----------|----------------|---------------------------------------------------------|
| Logic    | Language       | [ES6+](https://github.com/lukehoban/es6features#readme) |
|          | Views          | [React](https://facebook.github.io/react/)              |
|          | Models         | [Ampersand.js Models](https://ampersandjs.com/)         |
|          | Router         | [Ampersand.js Router](https://ampersandjs.com/)         |
|          | Toolbelt       | [lodash](https://lodash.com/)                           |
| Styles   | Language       | [Sass](http://sass-lang.com/)                           |
|          | Framework      | [Bootstrap v4](http://v4-alpha.getbootstrap.com/)       |
| Tools    | Dependencies   | [npm](https://www.npmjs.com/)                           |
|          | Module Bundler | [Webpack](https://webpack.github.io/)                   |
|          | Linter         | [ESLint](http://eslint.org/)                            |

See [package.json](https://github.com/bitmatica/bitmatica-web-app-boilerplate/blob/master/package.json) for a complete list of dependencies.


Getting Started
---------------

First, make sure you have a recent version (v6.2.0+) of [Node.js](https://nodejs.org) installed. Then:

```sh
$ git clone https://github.com/bitmatica/bitmatica-web-app-boilerplate.git
$ cd bitmatica-web-app-boilerplate
$ npm install
$ npm run watch
```

Browse to [http://localhost:8888](http://localhost:8888) to see the project in action!


Usage
-----

### Install Dependencies

To install application dependencies:

```sh
$ npm install
```

### Development

To start a server at [http://localhost:8888](http://localhost:8888) that automatically hot reloads on change:

```sh
$ npm run watch
```

### Distribution

To build an minified version of the project into `./build`:

```sh
$ npm run build
```

By default the `"production"` environment is built. To build `"staging"`:

```sh
$ NODE_ENV=staging npm run build
```

### Linting

To lint script files with ESLint:

```sh
$ npm run lint
```


More Info
---------

Read the [TODO](https://github.com/bitmatica/bitmatica-web-app-boilerplate/blob/master/TODO.md) for a list of improvements/additions we are considering.

Read [main.scss](https://github.com/bitmatica/bitmatica-web-app-boilerplate/blob/master/app/styles/main.scss) for a description of how our styles are organized and how we use CSS Modules.

Make sure to check out [Bitmatica's Javascript Style Guide](https://github.com/bitmatica/javascript-style-guide) for a comprehensive listing of our Javascript style rules and their rationales.


About Bitmatica
---------------

Bitmatica is a San Francisco-based software design and development company. We build web and mobile applications for companies around the world Visit [bitmatica.com](http://bitmatica.com) to learn more about us.


License
-------

MIT © [Bitmatica](http://bitmatica.com)

