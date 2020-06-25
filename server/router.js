const router = require('express').Router();
const controller = require('./controller.js');

router
.route('/:id/:color')
.get(controller.getOneProduct)


module.exports = router;


