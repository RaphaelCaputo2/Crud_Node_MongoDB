# Bem vindo ao repositório de CRUD com NodeJs + Express + MongoDb do candidato Raphael Caputo:

## Tecnologias que foram ustilizadas:
* NodeJs + Express (para fazer as rotas das API)
* MongoDB (banco de dados)
* JWT (Token para autenticação que expira em 24h)
* CryptoJS (Cria uma hash que deixa o password encriptado)
<br>
## O que é necessário:
* NodeJs 11.x.x
* Insomnia Para testar a API  [Download Aqui](https://insomnia.rest/download/)
<br>
## Features: <br>
* *Query* de Registro:<br>
 <http://localhost:3000/auth/register>
  
* *Query* de Autenticação:<br>
  <http://localhost:3000/auth/authenticate>
  
* *Query* de Forgot Password:<br>
 <http://localhost:3000/auth/forgot_password>* 
  
* *Query* de Reset Password:<br>
   <http://localhost:3000/auth/reset_password>*

 * *Query* de listar todos os projeto:<br>
   <http://localhost:3000/projects>
  
#### para acessar as Query do Forgot e reset password, é necessário configuração do [mailtrap](https://mailtrap.io/inboxes)

## Fazendo o Crud:
### Para fazer o crud, é necessário estar autenticado com o token.

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

### Inicie o insomnia, clique em *New Workspace* e escolha o nome do seu *Workspace*
<br>

<img src="src/imgReadme/Iniciando_config.png" alt="Iniciando_configuracao" width="400">
<br>
<br>

<hr>

### Adicione Environment:
<br>


#### Clique em *Manage Environments* :
<br>
<p>

<img src="src/imgReadme/config_environments.png" alt="environments" 
 width="200" height="320">


<img src="src/imgReadme/add_base.png" alt="adicionar_http" width="400">
</p>
<br>

#### Pronto, agora ja temos nossa base de URL preparada
<br>
<br>

### Agora vamos Organizar as pastas para nossas requisições
<br>

#### Crie duas Pastas, uma será nossa *Autenticação* e outra chamada *CRUD*
<br>
<br>


<img src="src/imgReadme/add_folder.png" alt="Adicionando pasta" style="max-width=100%;">
<br>
<br>
<br>


### Feito isso, agora vamos fazer nossas requisições de registro para nossa API
<br>

<div style="max-width=100%;">
<img src="src/imgReadme/new_register.png" >
 </div>
<br>
<br>
<br>

#### Vai ser feito como POST a nossa requisição

<br>
<br>
<img src="src/imgReadme/add_post_request.png" height="350">
<br>
<br>
<br>



#### Feito isso, vamos a configuração da nossa requisição, nossa *BASEURL* que criamos, um pouco acima, o caminho vai ser:
<code>*baseURL*/auth/register</code>
<br>
<br>
<br>

<img src="src/imgReadme/linkAndJson.png" width="400" height="400">
<br>
<br>
<br>


### Adicione as chaves *JSON* para o registro do novo usuário, e aperte *Send*
<br>
<br>


#### Virá um retorno com a chave do novo usuário.
<br>
<img src="src/imgReadme/preencherJson.png" style="max-width=100%;">
<br>
<br>
<br>


### Agora iremos autenticar esse usuário, que também será uma requisição POST.

<br>
<br>

<img src="src/imgReadme/autenticar.png" style="max-width=100%;">
<br>
<br>

#### Coloque o email e senha que você, acabou de criar!
<br>
<br>
<br>

 ##### O caminho será:

<code>baseurl/auth/authenticate</code>
<br>
<br>


<img src="src/imgReadme/autenticando.png" style="max-width=100%;">
<br>
<br>

### Irá retornar um token, Copie ele:
<br>
<br>
<img src="src/imgReadme/token.png" style="max-width=100%;">
<br>
<br>

<br>


### Vamos criar uma nova chave, para o objeto no *Environments* (Onde criamos a BASEURL)
<br>
<br>

<div style="max-width: 100%">
<img src="src/imgReadme/novaChaveToken.png" style="max-width=100%;">
<br>
<br>


<img src="src/imgReadme/adicionadoTOken.png" style="max-width=100%;">
</div>
<br>
<br>
<br>
<br>


### Agora iremos criar uma nova pasta, para fazermos as requisições do *CRUD*
<br>

<img src="src/imgReadme/addnovoFolder.png" style="max-width=100%;">
<br>
<br>


#### A pasta vai se chamar CRUD, e terá essa organização. <strong>ATENÇÂO</strong>
se atente as configurações das requisições da API:
<br>
<br>


<img src="src/imgReadme/pastaCrud.png" style="max-width=100%;">
<br>
<br>



### Agora iniciaremos as requisições do CRUD(Nessa parte, iremos usar a chave token, que criamos):
<br>
<br>

#### E a base de endereço de nossas requisições é:

<code>baseUrl/projects</code>
<br>
<br>

#### O primeiro sera o CREATE
<br>
<br>

#### vamos configurar a autorização, clique em AUTH e depois em Bearer TOKEN
<br>
<br>

<img src="src/imgReadme/configBEARER.png" style="max-width=100%;">
<br>
<br>

#### E depois clique em BODY e em JSON, depois preencha do jeito que achar melhor, e aperte SEND:
<br>
<br>

<img src="src/imgReadme/create.png" style="max-width=100%;">
<br>
<br>

#### Agora vamos listar os projetos:
<br>
<br>

#### E seguiremos essa configuração no HEADER, e com essa BASE de URL!
<br>
<br>

<img src="src/imgReadme/readingALL.png" style="max-width=100%;">
<br>
<br>


<strong>Para requisitar somente um projeto, você pode usar o ID do projeto/usuário,para fazer a query</strong>




<br>
<i>
<code>baseUrl/projects/ID</code>
</i>

<br>
<br>
<br>


#### Agora vamos fazer o UPDATE
<br>
<br>

#### Configurando a autorização(lembre-se, o ID do projeto é necessário):
<br>
<br>

<img src="src/imgReadme/deletando.png" style="max-width=100%;"><br>
<br>
<br>

#### Fazendo o update:
<br>
<br>
<img src="src/imgReadme/update.png" style="max-width=100%;">
<br>
<br>

#### Agora vamos fazer, o DELETE( necessário também o ID do projeto/usuario):
<br>

Configure, e logo aperte SEND :
<br>
<br>

<img src="src/imgReadme/deletando.png" style="max-width=100%;"><br>

<br>
<br>
<img src="src/imgReadme/configuracaoReading.png" style="max-width=100%;">
<br>
<br>
<br>

Lembrete: Na aba *Header* voce coloca Authorization, bearer o token que copiamos no *Environments* 

<br>
<br>




<br>
<br>
<br>
<br>
<br>




