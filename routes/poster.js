
const db = require('../models');

module.exports = function (app) {

  app.get('/', function (req, res) {
    db.request_needs.findAll({
      include: [db.comments],
    }).then(function (data) {
      let hbsObject = {
        posts: data
      }
      //   for (var i = 0; i < data.length; i++){
      //   hbsObject: [data[i].dataValues.user] = data[i].dataValues.post 
      // }
      res.render("index", hbsObject);
      console.log(hbsObject);
    })
  });

  // app.get('/requests', (req, res) => {
  //   db.request_needs.findOne({
  //     where: {
  //       id: req.params.id
  //       //id: 2,
  //     },
  //     //include: [db.comment]
  //   }).then(function (data) {
  //     let hbsObject2 = {
  //       hbsObject2: data.user,
  //       hbsObject3: data.post
  //     }
  //     console.log(data.user, ':', data.post)
  //     res.render("index", hbsObject2)
  //     //res.send([data[0].user);
  //   });
  // });

  // POST route
  app.post('/api/request_needs', (req, res) => {
    console.log(req.body);
    db.request_needs.create(req.body
      // {request_needs_name: req.body.request_needs_name}
    ).then((dbrequest_needs) => {
      // res.json(dbrequest_needs);
    }).catch(function (err) {
      res.json(err);
    });
  });


  // PUT route
  // router.put('/api/request_needs/:id', (req, res) => {
  //   db.request_needs.update(newrequest_needs,{
  //     where: {
  //       //id: req.params.id,
  //       id: 1,
  //     }

  //   }).then((dbrequest_needs) => {
  //     res.json('/');
  //   });
  // });

  //DELETE route
  app.delete('/delete_request/:id', function (req, res) {
    db.request_needs.destroy({
      where: {
        id: req.params.id
        //we will want to make this an input
      }
    }).then(data)
    {
      console.log("This should have deleted things", data);
    }
  });

//last brace of module export
}