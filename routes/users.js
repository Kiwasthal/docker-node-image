let express = require('express');
let router = express.Router();

// - Home Page //

router.get('/users', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
