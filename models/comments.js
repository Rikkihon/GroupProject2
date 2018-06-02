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
