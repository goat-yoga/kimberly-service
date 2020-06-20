const router = require('express').Router();

router
.route('/:id')
.get(controller.getSpecific)

module.exports = router;