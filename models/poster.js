//not sure where to use this or but I think it might be a component that we will need. Unsure.
module.exports = function(recommender)
{
    var recommender = sequelize.define("recommender", {
        comment: Datatypes.STRING,
        id: Datatypes.INTEGER
    })
    return recommender
}
    
  module.exports = function(requester_needs)  
  {
  var request_needs = sequelize.define("request_needs", {
        post_id: Datatypes.INTEGER,
        user: Datatypes.STRING,
        post: Datatypes.STRING,
     })
     
    return request_needs;

}