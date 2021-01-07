'use strict'

const repository = require('../repositories/patient-repository')
const md5 = require('md5')
const emailService = require('../services/email-service')
const authService = require('../services/auth-service')

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get()
    console.log('patient - get - all patients');
    res.status(200).send(data);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.getById = async (req, res, next) => {
  try {
    let id = req.params.id;
    var data = await repository.getById(id);
    console.log(`patient - getById - id[${id}]`);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.post = async (req, res, next) => {
  try {
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
    })
    emailService.send(
      req.body.email,
      'Bem-vindo ao Salvus Teste da 2ª Etapa',
      global.EMAIL_TMPL.replace('{0}', req.body.nome)
    )
    res.status(201).send({
      message: 'Paciente cadastrado com sucesso'
    });
    console.log('patient - create');
    console.log('Patient:', req.body);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}
exports.authenticate = async (req, res, next) => {
  try {
    const patient = await repository.authenticate({
      email: req.body.email,
      senha: md5(req.body.senha + global.SALT_KEY)
    })
    if (!patient) {
      console.log('patient - auth - not_found');
      res.status(404).send({
        message: 'Usuário ou Senha inválidos'
      });
      return
    }
    console.log(
      `patient - auth - email[${req.body.email}] - senha[${req.body.senha}]`
    );
    const token = await authService.generateToken({
      email: patient.email,
      nome: patient.nome
    });
    res.status(201).send({
      token: token,
      data: {
        email: patient.email,
        nome: patient.email
      },
      message: 'Autenticação feita com sucesso'
    })
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição' + erro
    })
  }
}

exports.put = async (req, res, next) => {
  try {
    let id = req.params.id;
    await repository.put(id, req.body);
    res.status(201).send({
      message: 'Dados do paciente foram atualizados com sucesso'
    });
    console.log(`patient - update - id[${id}]`);
    console.log('Patient:' + req.body);
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}

exports.delete = async (req, res, next) => {
  try {
    let id = req.params.id
    await repository.del(id)
    res.status(200).send({
      message: 'Paciente removido com successo com sucesso'
    });
    console.log(`patient - delete - id[${id}]`)
  } catch (erro) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
}
