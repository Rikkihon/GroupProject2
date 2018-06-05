var db = require('../models');
const express = require('express');
const router = express.Router();

var request_needs = require("../models/comments.js");
var comments = require("../models/recommender.js");

module.exports = function (app) {
  app.get('/', function(req, res){
      db.request_needs.findAll({
        include: [db.comments],
      }).then(function(data) { 
        let hbsObject = { 
         posts: data 
        }  
      //   for (var i = 0; i < data.length; i++){
      //   hbsObject: [data[i].dataValues.user] = data[i].dataValues.post 
      // }
       res.render("index", hbsObject);
      })
    });
 
 app.get('/requests',(req, res) => { 
  db.request_needs.findOne({
  where: {
    id: req.params.id
    //id: 2,
  },
  //include: [db.comment]
  }).then(function(data) {
    let hbsObject2 = {
       hbsObject2: data.user,
       hbsObject3: data.post
    }
    console.log(data.user , ':', data.post)
    res.render("index", hbsObject2)
    //res.send([data[0].user);
  });
  });

 // POST route
  
  app.post('/api/requests', (req, res) => {
    console.log("This is the req" , req)
    db.request_needs.update({
      post: req.params.request,
      user: req.params.name,
      //post: req.query.name
    }).then((dbrequest_needs) => {
      console.log("This is a test!" ,dbrequest_needs)
      res.render("index", hbsObject);
    });
  });
//   // PUT route
  
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
// // 
router.delete('/delete_request')
   db.request_needs.destroy({
       where: {
          //  id: req.params.id
          id: 1
           //we will want to make this an input
       }
   }).then(db.request_needs)
    {
    console.log("This should have deleted things");   
   
    }

  // final brace of module export
};
