var express = require('express');
var router = express.Router();
const database = require('../database')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Hello World',
    user: null,
    questions: [
      { title: "what is the gravity constant g", slug: 'a' },
      { title: "what is the planacks constant", slug: 'ab' },
      { title: "what is c is ensteins equation", slug: 'abc' },
    ],
    myquestions: [
      { title: "what is the gravity constant g", slug: 'a' },
      { title: "what is the planacks constant", slug: 'ab' },
      { title: "what is c is ensteins equation", slug: 'abc' },
    ]
  });
});

/* form for question post */
router.get('/postQuestion', function (req, res, next) {
  res.render('postQuestion', {
    title: 'Post Question',
    user: null,
  });
});

/* form for question post */
router.get('/student/', function (req, res, next) {
  database('student').select()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

/* accept data for question post */
router.post('/postQuestion', function (req, res, next) {
  res.redirect('/');
});

module.exports = router;
