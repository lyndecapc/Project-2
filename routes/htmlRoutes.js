require("dotenv").config()
var db = require("../models")
var petfinder = require("@petfinder/petfinder-js")
var client = new petfinder.Client({apiKey: process.env.apiKey, secret: process.env.secret})

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Dog.findAll().then(function (data) {
      res.render("index")
    })
  })

  // Load add page
  app.get("/add", function (req, res) {
    db.Dog.findAll().then(function (data) {
      res.render("add")
    })
  })

  // Load all dogs
  app.get('/dogs', (req, res) =>
    db.Dog.findAll({
      order: [["id", "DESC"]]
    })
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

  // Api call and adopt page route
  app.get("/adopt", function (req, res) {

    client.animal.search({type: "Dog"})
    .then(function (response) {
        var data = response.data.animals
        res.render("adopt", {data} )
    })
    .catch(err => console.log(err))
})

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404")
  })
}
