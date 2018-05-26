   module.exports = function(sequelize, DataTypes)  
  {
      var request_needs = sequelize.define("request_needs", {
        post_id: DataTypes.INTEGER,
        user: DataTypes.STRING,
        post: DataTypes.STRING,
        createdAt: DataTypes.TIMESTAMP,
        updatedAt: DataTypes.TIMESTAMP
     })
    return request_needs;
}
