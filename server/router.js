const router = require('express').Router();
const controller = require('./controller.js');

router
.route('/:item')
.get(controller.getOneProduct)


module.exports = router;


