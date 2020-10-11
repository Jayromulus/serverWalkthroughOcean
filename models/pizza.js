module.exports = (sequelize, DataTypes) => {
  const Pizza = sequelize.define('pizza', {
    nameOfPizza: {
      type: DataTypes.STRING,
      allowNull: false
    },
    toppings: {
      type: DataTypes.STRING
    },
    baseOfPizza: {
      type: DataTypes.STRING
    },
    numberOfToppings: {
      type: DataTypes.INTEGER
    },
    isDessertPizza: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pizzaShape: {
      type: DataTypes.STRING
    }
  })
  return Pizza;
}