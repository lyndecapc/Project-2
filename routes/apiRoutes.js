var db = require("../models");

module.exports = function (app) {
  // Get all dogs
  app.get("/api/dogs", function (req, res) {
    db.Dog.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Create a new dog
  app.post("/api/dogs", function (req, res) {
    db.Dog.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // Delete a dog by id
  app.delete("/api/dogs/:id", function (req, res) {
    db.Dog.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};