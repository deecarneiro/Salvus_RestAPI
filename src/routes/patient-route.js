'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/patient-controller')


router.get('/patient/:id', controller.getById);

router.get('/', controller.get);

router.post('/', controller.post);

router.post('/authenticate', controller.authenticate)

router.put('/patient/:id',controller.put);

router.delete('/patient/:id', controller.delete);

module.exports = router;