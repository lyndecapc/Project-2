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

  // Load adopt page
  app.get("/adopt", function (req, res) {
    res.render("adopt")
  })

  // Load all dogs
  app.get('/dogs', (req, res) =>
    db.Dog.findAll()
      .then(dogs => res.render("dogs", { dogs }))
      .catch(err => console.log(err)))

  // Post new dog to db
  app.post("/add", function (req, res) {
    let {
      dogName,
      picture,
      breed,
      gender,
      size,
      age,
      goodWithDogs,
      goodWithKids,
      goodWithCats,
      location,
      color,
      sellerPhone,
      sellerEmail
    } = req.body

    db.Dog.create({
      dogName,
      picture,
      breed,
      gender,
      size,
      age,
      goodWithDogs,
      goodWithKids,
      goodWithCats,
      location,
      color,
      sellerPhone,
      sellerEmail
    })
      .then(dogs => res.redirect("/dogs"))
      .catch(err => console.log(err))
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404")
  })
}