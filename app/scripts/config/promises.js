// Configure Promises for better error logging.
//
// In the browser, we globally override Promise from the ES6 polyfill to
// the compatible, performant, and featureful Bluebird implementation.
//
// We are using Bluebird primarily because it allows us to set a global Promise
// error handler, which we use to log the error and its stack trace.
//
// Without this, Promise implementations will often handle errors by either
// silently swallowing the error, or logging a useless stack trace from the
// Promise implementation's code, not the Promise user's code.

import BluebirdPromise from "bluebird";

export default function initPromises() {
  window.Promise = BluebirdPromise;
  
  window.addEventListener("unhandledrejection", (e) => {
    e.preventDefault();
    throw e.detail.reason;
  });
}
