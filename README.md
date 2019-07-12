# Salvus_RestAPI
Aplicação CRUD utilizando o conceito de REST API, a mesma foi solicitada na 2ª Etapa do Processo Seletivo da Salvus Saúde. A atividade foi feita com Node.js(Javascript) com banco de dados em MongoDB rodando em um servidor da amazon(aws).

Foram usadas as aplicações:
 1.Node.js(Javascript)
 2.MongoDB Atlas
 3.Postman(testes)

As dependências necessárias foram:
 1.Nodemon
 2.Body Parser
 3.Debug
 4.Express
 5.JsonWebToken
 6.MD5    
 7.Mongoose
 8.Sendgrid

A API conta com as seguintes features(funcionalidades):
 1.Cadastro de Paciente 
 2.Cadastro de Médico
 3.Lista de Pacientes
 4.Lista de Médicos
 5.Alterar Informações de Paciente via ID
 6.Alterar Informações de Médico via ID
 7.Criptografia de senhas
 8.Serviço de Autenticação
 9.Serviço de Envio de Email de Cadastro

Para rodar a Aplicação é necessário os seguintes passos:

1. Clonar o Repositório Remoto para um local;
2. Abrir a pasta e executar o CMD ou PowerShell;
3. Executar o comando 'npm install';
4.Após o término da instalação das dependências, executar o comando 'npm start';

Para utilizar as funções de CRUD se faz necessário usar o aplicativo Postman:
->Ao executar a API, aparece na tela do seu terminal de escolha a <porta> na qual a aplicação está rodando;
->As rotas são:
   -Para pacientes:
    CREATE : post: localhost:<porta>/api/patient
    READ : get: localhost:<porta>/api/patient
    READ:  get: localhost:<porta>/api/patient/:id
    UPDATE: put: localhost:<porta>/api/patient/:id
    DELETE: delete: localhost:<porta>/api/patient/:id
    AUTHENTICATE: post : localhost:<porta>/api/patient/authenticate

   -Para médicos:
    CREATE : post: localhost:<porta>/api/doctor
    READ : get: localhost:<porta>/api/doctor
    READ:  get: localhost:<porta>/api/doctor/:id
    UPDATE: put: localhost:<porta>/api/doctor/:id
    DELETE: delete: localhost:<porta>/api/ doctor/:id
    AUTHENTICATE: post : localhost:<porta>/api/doctor/authenticate
