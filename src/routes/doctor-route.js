'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/doctor-controller')

router.get('/', controller.getById);

router.get('/:id', controller.getById);

router.post('/', controller.post);

router.post('/authenticate', controller.authenticate);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;