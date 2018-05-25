   module.exports = function(recommender)  
  { var request_needs = sequelize.define("request_needs", {
        post_id: Datatypes.INTEGER,
        user: Datatypes.STRING,
        post: Datatypes.STRING,
     })
    return request_needs;
}