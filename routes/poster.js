
const db = require('../models');
var express = require("express");

module.exports = function (router) {
  

  router.get('/', (req, res) => {
      request_needs.findAll({}).then(function(data){

      console.log(data)
       {
      const hbsObject = {
       request_needs: name,
       request_needs: post,
      };
      res.json('index', hbsObject);
      console.log(request_needs);
    }
    });
  });

  // POST route
  router.post('/request_needs', (req, res) => {
    db.request_needs.create({
      request_needs_name: req.body.request_needs_name,
      devoured: req.body.devoured,
    }).then((dbrequest_needs) => {
      res.render(dbrequest_needs);
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
    }).then((dbrequest_needs) => {
      res.json('/');
    });
  });
// 
router.delete('/')
   db.comments.destroy({
       where: {
           id: 1
           //we will want to make this an input
       }
   }).then(db.comments)
    {
    console.log("This should have deleted things");   
    //console.log(dbcomments);    
    }

  // final brace of module export
};
