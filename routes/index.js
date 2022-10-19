let express = require('express');
let router = express.Router();

// - Users Listing - //
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
