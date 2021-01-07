'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/doctor-controller')

router.get('/', controller.get);

router.get('/doctor/:id', controller.getById);

router.post('/', controller.post);

router.post('/authenticate', controller.authenticate);

router.put('/doctor/:id', controller.put);

router.delete('/doctor/:id', controller.delete);

module.exports = router;