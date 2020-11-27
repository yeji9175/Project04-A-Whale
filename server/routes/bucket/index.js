const router = require('express').Router();
const controller = require('./controller');

router.get('/presets', controller.presets);
router.get('/list', controller.getList);
router.post('/', controller.create);

module.exports = router;
