//not sure where to use this or but I think it might be a component that we will need. Unsure.
module.exports = function(recommender)
{
    var recommender = sequelize.define("recommender", {
        comment: Datatypes.STRING,
        id: Datatypes.INTEGER
    })
    return recommender
}