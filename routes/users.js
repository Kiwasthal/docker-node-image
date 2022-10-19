let express = require('express');
let router = express.Router();

// - Home Page //

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Node.js Express App' });
});

module.exports = router;
