const db = require('../models');

module.exports = function (app) {
  // GET route
  app.get('/', (req, res) => {
    db.Burgers.findAll({}).then((dbBurgers) => {
      const hbsObject = {
        burgers: dbBurgers,
      };
      res.render('index', hbsObject);
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


  // final brace of module export
};
