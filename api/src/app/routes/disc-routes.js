const controller = require("../controllers/disc-controller");

module.exports = (app, version) => {
  
  const resource = "/"+version+"/discs";

  app
    .route(`${resource}`)
    .get(controller.list)
    .post(controller.create);

  app
    .route(`${resource}/:id`)
    .get(controller.fetch)
    .put(controller.update)
    .delete(controller.delete);
};
