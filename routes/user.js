var express = require('express');
var router = express.Router();
const userModule = require('../module/userModule');

router.post('/saveuser', userModule.postUser)
router.get('/getuser', userModule.getUser)
router.put('/updateuser/:id', userModule.updateUser)

module.exports = router;