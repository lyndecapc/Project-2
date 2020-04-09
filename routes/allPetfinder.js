// // Import module
// var petfinder = require('petfinder-promise')('keb5oP5dpxdKjhpDbcve88lw5QP2uyFADw1xSrqZVTUFPItI1Y', '7GrBKM2aRb2B7TICtRxcPbMEA34ofaVn29bwuVVK');

// var location = "37129"

// // Get a list of cat breeds
// petfinder.pet.find(location, {'count': 10}).then(function (data) {
//     console.log(data);

//     // var data = response.data.animals[19]
//     // console.log(data);
//     //console.log(response.data.animals[0].contact)
//     // var available = $("#availablePets")

//     // var newH3 = $("<h3>")

//     // newH3.text(data.name)

//     // available.append(newH3)

// }).catch(function (err) {
//     console.log('Error: ' + err.message);
// })