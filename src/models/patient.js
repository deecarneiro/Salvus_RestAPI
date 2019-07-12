'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    senha:{
        type: String,
        required: true,
        trim: true
    },
    cpf:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    telefone:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: Boolean,
        required: true,
        default: true
    },
    cep:{
        type: String,
        required: true,
        trim: true
    },
    rua:{
        type: String,
        required: true,
        trim: true
    },
    complemento:{
        type: String,
        required: true,
        trim: true
    },
    bairro:{
        type: String,
        required: true,
        trim: true
    },
    cidade:{
        type: String,
        required: true,
        trim: true
    },
    estado:{
        type: String,
        required: true,
        trim: true
    },
    operadora:{
        type: String,
        required: true,
        trim: true
    },
    historico: [{
        type: String,
        required: true,
        trim: true
    }],
    homeCare:{
        type: Boolean,
        required: true,
        default: false
    },
    prescricoes: [{
        type: String,
        required: true,
        trim: true
    }]

});

module.exports = mongoose.model('Patient', schema);