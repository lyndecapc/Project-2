var db = require("../models")
var petfinder = require("@petfinder/petfinder-js")
var client = new petfinder.Client({apiKey: "keb5oP5dpxdKjhpDbcve88lw5QP2uyFADw1xSrqZVTUFPItI1Y", secret: "CI9zv2Hejza5FGOi2xd6qvnH877dAayCMlEPGiy9"})

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Dog.findAll({}).then(function (data) {
      res.render("index")
    })
  })

  // Load add page
  app.get("/add", function (req, res) {
    db.Dog.findAll({
      order: [["updatedAt", "DESC"]]
    }).then(function (data) {
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

  app.get("/testAdopt", function (req, res) {

    client.animal.search({type: "Dog"})
    .then(function (response) {
        var data = response.data.animals
       // res.json(data[0])
        
      //   var available = $("#availablePets")
      //   var newH3 = $("<h3>")
      //   newH3.text(data[0].name)
      //   available.append(newH3)
      //   console.log("JASON================")
      //  console.log(available)
        res.render("adopt", {data} );
  //  res.json(available)
    })
    .catch(function (error) {
        // Handle the error
    })
})

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404")
  })
}