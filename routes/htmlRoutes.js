var db = require("../models")

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Dog.findAll({}).then(function (data) {
      res.render("index", {
        msg: "Welcome!",
        dog: data
      })
    })
  })

  // Load dog page and pass in a dog by id
  app.get("/dogs/:id", function (req, res) {
    db.Dog.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.render("dogs", {
        dog: data
      })
    })
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404")
  })
}