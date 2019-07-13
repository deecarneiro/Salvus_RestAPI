# Salvus_RestAPI
<p>Aplicação CRUD utilizando o conceito de REST API, a mesma foi solicitada na 2ª Etapa do Processo Seletivo da Salvus Saúde.</p>
<p>A atividade foi feita com Node.js(Javascript) com banco de dados em MongoDB rodando em um servidor da amazon(aws).</p>

Foram usadas as aplicações:
 1.Node.js(Javascript)
 2.MongoDB Atlas
 3.Postman(testes)

As dependências necessárias foram:
 <ul>
 <li>Nodemon</li>
 <li>Body Parser</li>
 <li>Debug</li>
 <li>Express</li>
 <li>JsonWebToken</li>
 <li>MD5</li>
 <li>Mongoose</li>
 <li>Sendgrid</li>
</ul>

A API conta com as seguintes features(funcionalidades):
 <ul>
 <li>.Cadastro de Paciente </li>
 <li>Cadastro de Médico</li>
 <li>Lista de Pacientes</li>
 <li>Lista de Médicos</li>
 <li>Alterar Informações de Paciente via ID</li>
 <li>Alterar Informações de Médico via ID</li>
 <li>Criptografia de senhas</li>
 <li>Serviço de Autenticação</li>
 <li>Serviço de Envio de Email de Cadastro</li>
</ul>
Para rodar a Aplicação é necessário os seguintes passos:

<ol>
 <li> Clonar o Repositório Remoto para um local</li>
 <li>Abrir a pasta e executar o CMD ou PowerShell</li>
 <li>Executar o comando 'npm install' para instalar as dependências</li>
 <li>Após o término da instalação das dependências, executar o comando 'npm start'</li>
<ol>

Para utilizar as funções de CRUD se faz necessário usar o aplicativo Postman:
->Ao executar a API, aparece na tela do seu terminal de escolha a <porta> na qual a aplicação está rodando;
 ->As rotas são:
 -Para pacientes:
 <ul>
  <li> CREATE : post: localhost:<porta>/api/patient</li>
  <li> READ : get: localhost:<porta>/api/patient</li>
  <li> READ:  get: localhost:<porta>/api/patient/:id</li>
  <li> UPDATE: put: localhost:<porta>/api/patient/:id</li>
  <li> DELETE: delete: localhost:<porta>/api/patient/:id</li>
  <li> AUTHENTICATE: post : localhost:<porta>/api/patient/authenticate</li>
 </ul>

  -Para médicos:
 <ul>
  <li>  CREATE : post: localhost:<porta>/api/doctor</li>
  <li>  READ : get: localhost:<porta>/api/doctor</li>
  <li>  READ:  get: localhost:<porta>/api/doctor/:id</li>
  <li>  UPDATE: put: localhost:<porta>/api/doctor/:id</li>
  <li>  DELETE: delete: localhost:<porta>/api/ doctor/:id</li>
  <li>  AUTHENTICATE: post : localhost:<porta>/api/doctor/authenticate</li>
</ul>
