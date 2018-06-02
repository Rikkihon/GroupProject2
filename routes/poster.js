var db = require('../models');
var express = require("express");
const router = require('./posts.js')

module.exports = function (app) {
  

  app.get('/', (req, res) => {
      console.log("test")
      db.request_needs.findAll({
        include: [db.comments]
      
      }).then(function(data){
        res.send(data);
        //use res.render when handlebars starts working 
        console.log(data);
       {
         //console log the whole response, 
         //then the piece from part from sequelize, 
         //
         //then get the object built, then log out the data into handlebars, then get the handlebars size 
      // const hbsObject = {
      // request_needs: name,
      // request_needs: post,
      // };
      // this is an object that we can render from the html side using res.render on the HTML routes, 
      //look at handlebars assignment for this. 
    //res.render('index', hbsObject);// this would render the handlebars object 
      //console.log(hbsObject);
    }
    });
  });

//  router.get('/requests', function (req, res) {   
//   db.request_needs.findOne({
//   where: {
//     // id: req.params.id
//     id: 1,
//   },
//   include: [db.comment]
//   }).then(function(data) {
//     res.render(db.request_needs);
//     console.log(data);
//   });
//   });
//   // POST route
  
//   router.post('/request_needs', (req, res) => {
//     db.request_needs.create({
//       request_needs_name: req.body.request_needs_name,
//     }).then((dbrequest_needs) => {
//       res.render(dbrequest_needs);
//     });
//   });
//   // PUT route
//   let newrequest_needs =  new request_needs('Need new car detailing place, any recommendations?','Jorge');
  
//   router.put('/api/request_needs/:id', (req, res) => {
//     db.request_needs.update(newrequest_needs,{
//       where: {
//         //id: req.params.id,
//         id: 1,
//       }
    
//     }).then((dbrequest_needs) => {
//       res.json('/');
//     });
//   });
// // 
// router.delete('/delete_request')
//    db.request_needs.destroy({
//        where: {
//           //  id: req.params.id
//           id: 1
//            //we will want to make this an input
//        }
//    }).then(db.request_needs)
//     {
//     console.log("This should have deleted things");   
//     console.log(db.request_needsf);    
//     }

  // final brace of module export
};
