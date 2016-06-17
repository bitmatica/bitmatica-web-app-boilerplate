import BaseModel from "scripts/models/base";

export default BaseModel.extend({
  modelType: "Library",
  urlRoot: "/library",
  idAttribute: "name",
  
  props: {
    name: "string",
    role: "string",
    link: "string",
  },
});
