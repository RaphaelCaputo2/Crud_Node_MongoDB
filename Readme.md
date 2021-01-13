# Bem vindo ao repositório de CRUD com NodeJs + Express + MongoDb do candidato Raphael Caputo:

## Tecnologias que foram ustilizadas:
* NodeJs + Express (para fazer as rotas das API)
* MongoDB (banco de dados)
* JWT (Token para autenticação que expira em 24h)
* CryptoJS (Cria uma hash que deixa o password encriptado)
## O que é necessário:
* NodeJs 11.x.x
* Insomnia Para testar a API  [Download Aqui](https://insomnia.rest/download/)

## Como iniciar os testes:
<br>
Faça o clone do projeto<br>
<code>git clone git@github.com:RaphaelCaputo2/vagas.git </code><br>
Navege ate a pasta do Projeto<br>
<code>cd Vagas</code><br>
Instale as dependências<br>
<code>npm install</code>
Inicie o servidor<br>
<code>npm start</br>
<br>
<br>

## Features:
* *Query* de Registro:<br>
 <http://localhost:3000/auth/register>
  
* *Query* de Autenticação:<br>
  <http://localhost:3000/auth/authenticate>
  
* *Query* de Forgot Password:<br>
 <http://localhost:3000/auth/forgot_password>* 
  
* *Query* de Reset Password:<br>
   <http://localhost:3000/auth/reset_password>*
  
#### *para acessar as Query do Forgot e reset password, é necessário configuração do [mailtrap](https://mailtrap.io/inboxes)

## Fazendo o Crud:
### Para fazer o crud, é necessário estar autenticado com o token.



* *Listar Projetos* <http://localhost:3000/projects>