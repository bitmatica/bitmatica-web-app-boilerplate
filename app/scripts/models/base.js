import AmpersandModel from "ampersand-model";

import {sync} from "scripts/helpers/ajax";

export default AmpersandModel.extend({
  // Override `sync` to prepend Backend root URL and return Promises.
  sync,
});
