var petfinder = require("@petfinder/petfinder-js")
var client = new petfinder.Client({apiKey: "keb5oP5dpxdKjhpDbcve88lw5QP2uyFADw1xSrqZVTUFPItI1Y", secret: "CI9zv2Hejza5FGOi2xd6qvnH877dAayCMlEPGiy9"})

client.animal.search({type: "Dog"})
    .then(function (response) {
        var data = response.data.animals
        console.log(data[0])
        
        var available = $("#availablePets")
        var newH3 = $("<h3>")
        newH3.text(data[0].name)
        available.append(newH3)
    })
    .catch(function (error) {
        // Handle the error
    })