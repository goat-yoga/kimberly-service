const router = require('express').Router();
const controller = require('./controller.js');

router
.route('/:id')
.get(controller.getOneProduct)


module.exports = router;


