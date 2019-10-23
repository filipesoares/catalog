const baseRoutes = require("./base-routes");
const discRoutes = require("./disc-routes");
const version = "v1";

module.exports = app => {
  baseRoutes(app, version);
  discRoutes(app, version);
};
