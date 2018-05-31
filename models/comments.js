module.exports = function(sequelize, DataTypes)  
{ var comments_DB = sequelize.define("request_needs", {
      post_id: DataTypes.INTEGER,
      user: DataTypes.STRING,
      comment: DataTypes.STRING},{
      createdAt: DataTypes.TIMESTAMP,
      updatedAt: DataTypes.TIMESTAMP
   })
  return comments_DB;
}