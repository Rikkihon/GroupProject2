<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var request_needs = sequelize.define("request_needs", {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      post: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    request_needs.associate = function(models) {
      // We're saying that a request_needs should belong to an comments
      // A request_needs can't be created without an comments due to the foreign key constraint
      request_needs.belongsTo(models.comments, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
=======
   module.exports = function(sequelize, DataTypes)  
  {
      var request_needs = sequelize.define("request_needs", {
        post_id: DataTypes.INTEGER,
        user: DataTypes.STRING,
        post: DataTypes.STRING},{
        createdAt: DataTypes.TIMESTAMP,
        updatedAt: DataTypes.TIMESTAMP
     })
>>>>>>> f973d9795cb4ed769f74b2dde9eeb60500ea18c9
    return request_needs;
  };
  