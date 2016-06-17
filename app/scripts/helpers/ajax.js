import syncWithPromise from "ampersand-sync-with-promise";
import {result, clone} from "lodash";

import {backendURL} from "scripts/config";

// Override `sync` to
// - prepend Backend root URL to model relative URLs
// - return Promises instead of XHRs
export function sync(method, model, options = {}) {
  const opts = clone(options);
  const url = opts.url || result(model, "url");
  
  if (!url.includes("://")) {
    opts.url = backendURL + url;
  }
  
  return syncWithPromise.call(model, method, model, opts);
}
