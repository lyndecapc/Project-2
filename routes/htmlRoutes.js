var db = require("../models")

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Dog.findAll({}).then(function (data) {
      res.render("index")
    })
  })

  // Load add page
  app.get("/add", function (req, res) {
    db.Dog.findAll({}).then(function (data) {
      res.render("add")
    })
  })

  // Load all dogs
  app.get("/dogs", function (req, res) {
    db.Dog.findAll({}).then(function (data) {
      res.render("dogs", {
        dog: data
      })
    })
  })

  // Load dog page and pass in a dog by id
  app.get("/dogs/:id", function (req, res) {
    db.Dog.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.render("indvDog", {
        dog: data
      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404")
  })
}