var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    section: 'under title'
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    section: 'under title'
  });
});

router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About'
  });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact'  
  });
});

module.exports = router;









module.exports = router;
