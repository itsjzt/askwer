var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hello World',
    user: null,
    questions: [
      {title: "what is the gravity constant g", slug: 'a'},
      {title: "what is the planacks constant", slug: 'ab'},
      {title: "what is c is ensteins equation", slug: 'abc'},
    ],
    myquestions: [
      {title: "what is the gravity constant g", slug: 'a'},
      {title: "what is the planacks constant", slug: 'ab'},
      {title: "what is c is ensteins equation", slug: 'abc'},
    ]
  });
});

/* form for question post */
router.get('/postQuestion', function(req, res, next) {
  res.render('postQuestion', {
    title: 'Post Question',
    user: null,
  });
});

/* accept data for question post */
router.post('/postQuestion', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
