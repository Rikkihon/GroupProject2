const express = require('express');

const router = express.Router();

router.get('/requests', (req, res, next) => {
  // res.status(200).json({
  //   message: 'Get all orders',
  });
// });

module.exports = router;
