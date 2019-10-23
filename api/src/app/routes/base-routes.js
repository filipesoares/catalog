module.exports = (app, version) => {
  app.get("/"+version, function(req, res) {
    res.send({ 
          "api": "catalog-api",
          "version": "1.0.0"
        }
    );
  });

  app.get("/"+version+"/health", function(req, res) {
    res.send(`OK`);
  });
  
};
