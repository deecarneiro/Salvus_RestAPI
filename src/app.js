const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

mongoose.connect(config.connectionString);

const Patient = require('./models/patient');
const Doctor = require('./models/doctor');


const indexRoutes = require('./routes/index-route');
const patientsRoutes = require('./routes/patients-route');
const doctorsRoutes = require('./routes/doctor-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoutes);
app.use('/api/patients', patientsRoutes);
app.use('/api/doctors', doctorsRoutes);


module.exports = app;