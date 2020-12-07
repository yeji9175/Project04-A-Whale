const router = require('express').Router();
const controller = require('./controller');

router.get('/:bucketNo', controller.getDetails);
router.post('/', controller.createDetail);
router.patch('/:no', controller.updateDetail);
router.delete('/:no', controller.deleteDetail);

module.exports = router;