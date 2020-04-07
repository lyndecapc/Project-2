module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    dogName: {
      type: DataTypes.STRING,
      len: [1]
    },
    picture: {
      type: DataTypes.STRING,
      notNull: true
    },
    breed: {
      type: DataTypes.STRING,
      len: [1]
    },
    gender: {
      type: DataTypes.STRING,
      len: [1]
    },
    size: {
      type: DataTypes.STRING,
      len: [1]
    },
    age: {
      type: DataTypes.INTEGER,
      len: [1]
    },
    goodWithDogs: {
      type: DataTypes.BOOLEAN
    },
    goodWithKids: {
      type: DataTypes.BOOLEAN
    },
    goodWithCats: {
      type: DataTypes.BOOLEAN
    },
    location: {
      type: DataTypes.STRING,
      len: [1]
    },
    color: {
      type: DataTypes.STRING,
      len: [1]
    },
    sellerPhone: {
      type: DataTypes.STRING,
      len: [1]
    },
    sellerEmail: {
      type: DataTypes.STRING,
      len: [1],
      isEmail: true
    }
  })
  return Dog
}