module.exports = function (petFinderCore, Promise, promisedCallback) {
  function getPet(petId, options) {
      options = options || {};
      return new Promise(function (resolve, reject) {
          petFinderCore.getPet(petId, options, promisedCallback(resolve, reject));
      })
  }

  function getRandomPet(options) {
      options = options || {};
      return new Promise(function (resolve, reject) {
          petFinderCore.getRandomPet(options, promisedCallback(resolve, reject));
      })
  }

  function findPet(location, options) {
      options = options || {};
      return new Promise(function (resolve, reject) {
          petFinderCore.findPet(location, options, promisedCallback(resolve, reject));
      })
  }

  return {
      get: getPet,
      getRandom: getRandomPet,
      find: findPet
  }
};