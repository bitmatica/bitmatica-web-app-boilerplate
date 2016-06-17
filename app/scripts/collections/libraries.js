import BaseCollection from "scripts/collections/base";
import Library from "scripts/models/library";

export default BaseCollection.extend({
  model: Library,
  url: "/library",
});
