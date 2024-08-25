const express = require('express');
const router = express.Router();
const { processPostRequest, processGetRequest } = require('../controller/controller');

router.post('/bfhl', processPostRequest);
router.get('/bfhl', processGetRequest);

module.exports = router;
