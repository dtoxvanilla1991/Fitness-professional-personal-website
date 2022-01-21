const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.packages.get);

router.post('/', auth(), controllers.packages.post);

router.put('/:id', auth(), controllers.packages.put);

router.delete('/:id', auth(), controllers.packages.delete);

module.exports = router;