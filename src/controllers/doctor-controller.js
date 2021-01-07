'use strict';

const repository = require('../repositories/doctor-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');
const emailService = require('../services/email-service');

exports.get =  async(req, res, next) =>{
    try
    {
        var data = await repository.get();
        res.status(200).send(data);
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
};

exports.getById = async(req, res, next) =>{
    try{
        var data = await repository.getById(req.params.id)
            res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
    
};
exports.post = async(req, res, next)=>{
    try
    {   
        await repository.create({
            nome: req.body.nome,
            senha: md5(req.body.senha + global.SALT_KEY),
            crm: req.body.crm,
            email: req.body.email,
            telefone: req.body.telefone,
            status: req.body.status,
            cep: req.body.cep,
            rua: req.body.rua,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            operadoras: req.body.operadoras,
            prestadores: req.body.prestadores
        });

       let sendEmail = await emailService.send(
            req.body.email,
            'Bem-vindo ao Salvus Teste da 2ª Etapa',
             global.EMAIL_TMPL.replace('{0}', req.body.nome)
        );
        res.status(200).send({
            message: 'Médico cadastrado com sucesso'+sendEmail
        });
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'+erro
        });

    }
}

exports.authenticate = async(req, res, next)=>{
    try
    {   
       const doctor = await repository.authenticate({
            email: req.body.email,
            senha: md5(req.body.senha + global.SALT_KEY),

            });
       if(!doctor){
            res.status(404).send({
                message: 'Usuário ou Senha inválidos'
            });
            return;
       }
       const token = await authService.generateToken(
            {email: doctor.email,
             nome: doctor.nome
            }
        );
        res.status(201).send({
            token: token ,
            data:{
                email: doctor.email,
                nome: doctor.nome
            },
            message: 'Autenticação feita com sucesso'
        });
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });

    }
}

exports.put  = async(req, res, next) =>{
    
    try
    {
        await repository.put(req.params.id, req.body);
        res.status(201).send({
            message: 'Dados do médico foram atualizados com sucesso'
        });
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
       
};

exports.delete = async(req, res, next) => {
    try
    {
        await repository.del(req.params.id);
        res.status(200).send({
            message: 'Médico removido com successo com sucesso'
        });
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};