<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define("comments", {
    // Giving the comments model a name of type STRING
    name: DataTypes.STRING,
  });

  comments.associate = function(models) {
    // Associating comments with Posts
    // When an comments is deleted, also delete any associated Posts
    comments.hasMany(models.request_needs, {
      onDelete: "cascade"
    });
  };

  return comments;
};
=======
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
>>>>>>> f973d9795cb4ed769f74b2dde9eeb60500ea18c9
