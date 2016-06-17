import AmpersandRestCollection from "ampersand-rest-collection";

import {sync} from "scripts/helpers/ajax";

export default AmpersandRestCollection.extend({
  // Override `sync` to prepend Backend root URL and return Promises.
  sync,
});
