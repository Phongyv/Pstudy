const express = require('express');
const router =express.Router();

const hoctapController = require('../controllers/hoctapController');

router.use('/',hoctapController.getLearn);

module.exports = router;
