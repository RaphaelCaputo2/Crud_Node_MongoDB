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
<code>git clone https://github.com/RaphaelCaputo2/vagas.git</code><br>
<br>
Navege ate a pasta do Projeto<br>
<code>cd Vagas</code><br>
<br>
Instale as dependências<br>
<code>npm install</code>
<br>
<br>
Inicie o servidor<br>
<code>npm start</br>
<br>
<br>
<br>

## Configurando o [Insomnia](https://insomnia.rest/download/)

Inicie o insomnia, clique em *New Workspace* e escolha o nome do seu *Workspace*<br>
<img src="src/imgReadme/Iniciando_config.png" alt="Iniciando_configuracao">
<br>
<br>
<br>
Adicione Environment:<br>
Clique em *Manage Environments*:
<img src="src/imgReadme/config_environments.png" alt="environments" height="350"><br>
<img src="src/imgReadme/add_base.png" alt="adicionar_http" ><br>
<span>Pronto, agora ja temos nossa base de URL preparada</span>
<br>
<br>
<p>Agora vamos Organizar as pastas para nossas requisições<p><br>
Crie duas Pastas, uma será nossa *Autenticação* e outra chamada *CRUD*<br>
<img src="src/imgReadme/add_folder.png" alt="Adicionando pasta"><br>
<br>
<br>
<div>Feito isso, agora vamos fazer nossas requisições de registro para nossa API</div><br>
<img src="src/imgReadme/new_register.png"><br>
<p>Vai ser feito como POST a nossa requisição</p>
<img src="src/imgReadme/add_post_request.png"><br>
<p>Feito isso, vamos a configuração da nossa requisição, nossa *BASEURL* que criamos,<br> um pouco acima, o caminho vai ser:<br>
<code>baseURL/auth/register</code><br>
<img src="src/imgReadme/linkAndJson.png"><br>
Adicione as chaves *JSON* para o registro do novo usuário, e aperte *Send*<br>
virá um retorno com a chave do novo usuário.
<img src="src/imgReadme/preencherJson.png"><br>
Agora iremos autenticar esse usuário, que também será uma requisição POST.<br>
<img src="src/imgReadme/autenticar.png"><br>
Coloque o email e senha que você, acabou de criar!<br>
o caminho será:<br>
<code>baseurl/auth/authenticate</code><br>
<img src="src/imgReadme/autenticando.png"><br>
Irá retornar um token, Copie ele:<br>
<img src="src/imgReadme/token.png"><br>
Vamos criar uma nova chave, para o objeto no *Environments*(Onde criamos a BASEURL)<br>
<img src="src/imgReadme/novaChaveToken.png"><br>
<img src="src/imgReadme/adicionadoTOken.png"><br>
<br>
<br>
<br>
<p>Agora iremos criar uma nova pasta, para fazermos as requisições do *CRUD*<p><br>
<img src="src/imgReadme/addnovoFolder.png"><br>
<nav>A pasta vai se chamar CRUD, e terá essa organização. <strong>ATENÇÂO</strong>
se atente as configurações das requisições da API:</nav><br>
<img src="src/imgReadme/pastaCrud.png"><br>
<br>
<br>
Agora iniciaremos as requisições do CRUD(Nessa parte, iremos usar a chave token, que criamos):<br>
E a base de endereço de nossas requisições é:
<code>baseUrl/projects</code><br>
<br>
<br>
<p>O primeiro sera o CREATE</p><br>
vamos configurar a autorização, clique em AUTH e depois em Bearer TOKEN<br>
<img src="src/imgReadme/configBEARER.png"><br>
<br>
E depois clique em BODY e em JSON, depois preencha do jeito que achar melhor, e aperte SEND:<br>
<img src="src/imgReadme/create.png"><br>
<br>
<br>
Agora vamos listar os projetos:<br>
e seguiremos essa configuração no HEADER, e com essa BASE de URL!
<img src="src/imgReadme/readingALL.png"><br>
<br>
<strong>Para requisitar somente um projeto, você pode usar o ID do projeto/usuário,para fazer a query</strong>
<code>baseUrl/projects/ID</code>
<br>
<br>
<br>
<p>Agora vamos fazer o UPDATE<p><br>
Configurando a autorização(lembre-se, o ID do projeto é necessário):
<img src="src/imgReadme/deletando.png"><br>
<br>
Fazendo o update:<br>
<img src="src/imgReadme/update.png"><br>
<br>
<p>Agora vamos fazer, o DELETE( necessário também o ID do projeto/usuario):<p><br>
Configure, e logo aperte SEND :<br>
<br>
<img src="src/imgReadme/deletando.png"><br>

<br>
<br>
<img src="src/imgReadme/configuracaoReading.png"><br>
Lembrete: Na aba *Header* voce coloca Authorization, bearer o token que copiamos no *Environments*<br>
<br>




<br>
<br>
<br>
<br>
<br>
## Features:<br>
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