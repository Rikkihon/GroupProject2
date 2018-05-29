module.exports = function(sequelize, DataTypes)  
{ 
  var comments = sequelize.define("comments", {
      user: DataTypes.STRING,
      comment: DataTypes.STRING,
   })
  return comments;
}
