'use strict';

'use strict'

const mongoose = require('mongoose');
const Doctor = mongoose.model('Doctor');

exports.get =  async(req, res, next) =>{
    const result = await Doctor.find({});
    return result;
};

exports.getById = async(id) =>{
    const result = await Doctor
    .findById(id);
    return result;
};

exports.create = async(data) =>{
    var doctor = new Doctor(data);
    await doctor.save();
};

exports.authenticate = async(data) =>{
    const result = await Doctor.findOne({
        email: data.email,
        senha: data.senha
    });
    return result;
};

exports.put = async(id, data) =>{
    await Doctor
     .findByIdAndUpdate(id,{
         $set:{
            nome: data.nome,
            crm: data.crm,
            email: data.email,  
            telefone : data.telefone,
            status: data.status,
            rua: data.rua,
            cep: data.cep,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            operadoras: data.operadoras,
            prestadores: data.prestadores
         }
     });
 };
 
 exports.del = async (id) =>{
     await Doctor
         .findOneAndRemove(id);
 }