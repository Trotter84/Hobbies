var express = require('express');
var router = express.Router();
var Hobbies = require('../models').Hobbies;

var games = [
  { id: 1, title: 'Super Smash Bros' },
  { id: 2, title: 'Red Dead Redemption 2' },
  { id: 3, title: 'The Legend of Zelda: Breath of the Wild' }
]

/* GET game listing. */
router.get('/', function(req, res, next) {
  Hobbies.all()
    .then( function(hobbies) {
      return res.render('hobbies', { hobbies: hobbies })
    })
});

// POST add game listing
router.post('/', function(req, res) {
  var title = req.body.title;
  Hobbies.create({ title: title })
    .then( function() {
      res.redirect('/hobbies');
    });
});

router.delete('/:id', function(req, res) {
  Hobbies.findById(req.params.id)
    .then( function(hobbies) {
      hobbies.destroy()
    })
    .then( function() {
      return res.redirect('/hobbies');
    });
});

module.exports = router;
