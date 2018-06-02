const db = require('../models');

module.exports = function (app) {
  
//this is the new error
  app.get('/', (req, res) => {
    db.request_needs.findAll({}).then((dbrequestneeds) => {
      const hbsObject = {
       request_needs: dbrequestneeds
      };
      res.json('index', hbsObject);
      console.log(request_needs);
    });
  });

  // POST route
  app.post('/', (req, res) => {
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then((dbBurgers) => {
      res.render(dbBurgers);
    });
  });
  // PUT route
  app.put('/api/burgers/:id', (req, res) => {
    db.Burgers.update({
      devoured: true,
    }, {
      where: {
        id: req.params.id,
      },
    }).then((dbBurgers) => {
      res.json('/');
    });
  });
// 
app.delete('/')
   db.Comments.destroy({
       where: {
           id: 1
       }
   }).then(function(){})(db.Comments)
    {
    console.log(dbUser);    
    }

  // final brace of module export
};
