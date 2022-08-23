var express = require('express');
var router = express.Router();

const messages = [
  {
    title: 'Its so hot',
    description:
      'I need winter right now',
    username: 'Armando',
    date: new Date()
  },
  {
    title: 'Food thought',
    description:
      'I love risoto',
    username: 'Laurie',
    date: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: new Date()
  };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
