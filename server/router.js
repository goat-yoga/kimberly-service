const router = require('express').Router();
const controller = require('./controller.js');
router
.route('/:id')
.get(controller.getSpecific)

module.exports = router;

// a comment to see if my eslint is checking new changes