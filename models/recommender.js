   module.exports = function(sequelize, DataTypes)  
  {
      var request_needs = sequelize.define("request_needs", {
        user: DataTypes.STRING,
        post: DataTypes.STRING,
     })
    return request_needs;
}
