'use strict'

const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

exports.get =  async(req, res, next) =>{
    const result = await Patient.find({});
    return result;
};

exports.getById = async(id) =>{
    const result = await Patient
    .find({
        _id: id
    });
    return result;
};

exports.create = async(data) =>{
    var patient = new Patient(data);
    await patient.save();
};

exports.authenticate = async(data) =>{
    const result = await Patient.findOne({
        email: data.email,
        senha: data.senha
    });
    return result;
};

exports.put = async(id, data) =>{
   await Patient
    .findByIdAndUpdate(id,{
        $set:{
            nome: data.nome,
            cpf: data.cpf,
            email: data.email,  
            telefone : data.telefone,
            status: data.status,
            cep: data.cep,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            operadora: data.operadora,
            homeCare: data.homeCare,        
        }
    });
};

exports.del = async (id) =>{
    await Patient
        .findOneAndRemove(id);
}