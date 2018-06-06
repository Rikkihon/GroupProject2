module.exports = function(sequelize, DataTypes) {
    var request_needs = sequelize.define("request_needs", {
      user: {
        type: DataTypes.TEXT,
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
  
    return request_needs;
  };
  