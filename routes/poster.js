const db = require('../models');
const express = require("express");

module.exports = function (router) {
  
//this is the new error
  router.get('/', (req, res) => {
    db.request_needs.findAll({}).then((dbrequestneeds) => {
      const hbsObject = {
       request_needs: name,
       request_needs: post
      };
      res.json('index', hbsObject);
      console.log(request_needs);
    });
  });

  // POST route
  router.post('/', (req, res) => {
    db.request_needs.create({
      request_needs_name: req.body.request_needs_name,
      devoured: req.body.devoured,
    }).then((dbrequestneeds) => {
      res.render(dbrequestneeds);
    });
  });
  // PUT route
  router.put('/api/request_needs/:id', (req, res) => {
    db.request_needs.update({
      devoured: true,
    }, {
      where: {
        id: req.params.id,
      },
    }).then((dbrequestneeds) => {
      res.json('/');
    });
  });

// router.delete('/')
//    db.Comments.destroy({
//        where: {
//            id: 1
//        }
//    }).then(db.Comments)
//     {
//     console.log("This should have deleted things");    
//     }

  // final brace of module export
};
