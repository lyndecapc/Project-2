// The API object contains methods for each kind of request we'll make
var API = {
  getAllDogs: function() {
    return $.ajax({
      url: "api/dogs",
      type: "GET"
    })
  },
  getIndvDog: function(id) {
    return $.ajax({
      url: "api/dogs/" + id,
      type: "GET"
    })
  }
}

// refreshDogs gets all dogs from the db and repopulates the list
var refreshDogs = function() {
  API.getAllDogs().then(function(data) {
    var col1 = $("#col1")
    var col2 = $("#col2")
    var col3 = $("#col3")
    var col4 = $("#col4")
    var activeCol
    var i = 0

    data.map(function(dog) {

        switch (i) {
            case 0:
                activeCol = col1
                break;
            case 1:
                activeCol = col2
                break;
            case 2:
                activeCol = col3
                break;
            case 3:
                activeCol = col4
                break;
        }

      var card = $("<div>")
        .addClass("card dogCard")
        
        .css("width", "18rem")

      var a = $("<a>")
        .addClass("indvDogBtn")
        .attr("href", "/dogs/" + dog.id)
        // .attr("data-id", dog.id)
        .html("<img src='" + dog.picture + "' data-id='" + dog.id + "' class='card-img-top' alt='" + dog.dogName + " Image'>")

      var cardBody = $("<div>")
        .addClass("card-body")
        .html("<h5 class='card-title'>" + dog.dogName + "</h5>")

      card.append(a)
      card.append(cardBody)
      activeCol.append(card)

      i++

      if (i === 4) {
        i = 0
      }

    })
    
  })
}

// Click on buy dog
var handleBuyDogClick = function() {
  API.getAllDogs().then(function() {
    refreshDogs()
  })
}

// Listener
$("#buyDog").on("click", handleBuyDogClick())

$(document).on("click", ".indvDogBtn", function(e){
    console.log(e.target.getAttribute("data-id"))

    API.getIndvDog(idToView).then(function(data) {
        
    })
})