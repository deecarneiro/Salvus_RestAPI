'use strict';

const repository = require('../repositories/pacient-repository');
const md5 = require('md5');
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
    try
    {   var data = repository.getById(req.params.id);
        res.status(200).send(data);
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
    
};

exports.post = async(req, res, next) =>{

    try
    {
        await repository.create({
            nome: req.body.nome,
            senha: md5(req.body.senha + global.SALT_KEY),
            cpf: req.body.cpf,
            email: req.body.email,
            telefone: req.body.telefone,
            status: req.body.status,
            cep: req.body.cep,
            rua: req.body.rua,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            operadora: req.body.operadora,
            historico: req.body.historico,
            homeCare: req.body.homeCare,
            prescricoes: req.body.prescricoes
        });
        emailService.send(
            req.body.email,
            'Bem-vindo ao Salvus Teste da 2ª Etapa',
             global.EMAIL_TMPL.replace('{0}', req.body.nome)
        );
        res.status(201).send({
            message: 'Paciente cadastrado com sucesso'
        });
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};
exports.authenticate = async(req, res, next)=>{
    try
    {   
       const patient = await repository.authenticate({
            email: req.body.email,
            senha: md5(req.body.senha + global.SALT_KEY),

            });
       if(!patient){
            res.status(404).send({
                message: 'Usuário ou Senha inválidos'
            });
            return;
       }
       const token = authService.generateToken(
            {email: patient.email,
             nome: patient.nome
            }
        );
        res.status(201).send({
            token: token ,
            data:{
                email: patient.email,
                nome: patient.email
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
            message: 'Dados do paciente foram atualizados com sucesso'
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
            message: 'Paciente removido com successo com sucesso'
        });
    }catch(erro)
    {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};