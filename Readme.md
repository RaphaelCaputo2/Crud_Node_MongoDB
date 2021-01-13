# Bem vindo ao repositório de CRUD com NodeJs + Express + MongoDb do candidato Raphael Caputo: ##
Tecnologias que foram ustilizadas: - NodeJs + Express (para fazer as rotas das API) - MongoDB (banco
de dados) - JWT (Token para autenticação que expira em 24h) - CryptoJS (Cria uma hash que deixa o
password encriptado)
<br />
<hr />

## O que é necessário: - NodeJs 11.x.x - Insomnia Para testar a API [Download
Aqui](https://insomnia.rest/download/)
<br />
<hr />

## Features: <br />

- _Query_ de Registro:<br />
<http://localhost:3000/auth/register> - _Query_ de Autenticação:<br />
<http://localhost:3000/auth/authenticate> - _Query_ de Forgot Password:<br />
<http://localhost:3000/auth/forgot_password>\* - _Query_ de Reset Password:<br />
<http://localhost:3000/auth/reset_password>\* - _Query_ de listar todos os projeto:<br />
<http://localhost:3000/projects> #### para acessar as Query do Forgot e reset password, é necessário
configuração do [mailtrap](https://mailtrap.io/inboxes)

<hr />

### Para fazer o crud, é necessário estar autenticado com o token. ## Vamos registrar, e autenticar
com o token que iremos gerar:

<br />
* Faça o clone do projeto
<br />
<code>git clone https://github.com/RaphaelCaputo2/vagas.git</code><br />
<br />

- Navege ate a pasta do Projeto<br />
<code>cd Vagas</code><br />
<br />

* Instale as dependências<br />
<code>npm install</code>
<br />
<br />

- Inicie o servidor<br />
<code>npm start</code>
<br />

## Configurando o [Insomnia](https://insomnia.rest/download/) ### Inicie o insomnia, clique em _New
Workspace_ e escolha o nome do seu _Workspace_

<br />

<img src="src/imgReadme/Iniciando_config.png" alt="Iniciando_configuracao" width="400" />
<br />
<br />

<hr />

### Adicione Environment:
<<<<<<< HEAD

<br />
=======
<br>
>>>>>>> parent of aa94769... Mais readme 7


<<<<<<< HEAD
<br />
=======
#### Clique em *Manage Environments* :
<br>
>>>>>>> parent of aa94769... Mais readme 7
<p>
  <img src="src/imgReadme/config_environments.png" alt="environments" width="200" height="320" />

<<<<<<< HEAD
  <img src="src/imgReadme/add_base.png" alt="adicionar_http" width="400" />
=======
<img src="src/imgReadme/config_environments.png" alt="environments" 
 width="200" height="320">


<img src="src/imgReadme/add_base.png" alt="adicionar_http" width="400">
>>>>>>> parent of aa94769... Mais readme 7
</p>
<br />

<hr />

#### Pronto, agora ja temos nossa base de URL preparada
<<<<<<< HEAD

<br />
<br />
=======
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<hr />

### Agora vamos Organizar as pastas para nossas requisições
<<<<<<< HEAD

<br />

#### Crie duas Pastas, uma será nossa _Autenticação_ e outra chamada _CRUD_

<br />
<br />

<img src="src/imgReadme/add_folder.png" alt="Adicionando pasta" style="max-width=100%;" />
<br />
<br />
<br />
=======
<br>

#### Crie duas Pastas, uma será nossa *Autenticação* e outra chamada *CRUD*
<br>
<br>


<img src="src/imgReadme/add_folder.png" alt="Adicionando pasta" style="max-width=100%;">
<br>
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<hr />

### Feito isso, agora vamos fazer nossas requisições de registro para nossa API
<<<<<<< HEAD

<br />
=======
<br>
>>>>>>> parent of aa94769... Mais readme 7

<div style="max-width=100%;">
  <img src="src/imgReadme/new_register.png" />
</div>
<br />
<br />
<br />

#### Vai ser feito como POST a nossa requisição

<br />
<br />
<img src="src/imgReadme/add_post_request.png" height="350" />
<br />
<br />
<br />

<<<<<<< HEAD
<hr />

#### Feito isso, vamos a configuração da nossa requisição, nossa _BASEURL_ que criamos, um pouco
acima, o caminho vai ser:

<code>_baseURL_/auth/register</code>
<br />
<br />
<br />
=======

<hr>

#### Feito isso, vamos a configuração da nossa requisição, nossa *BASEURL* que criamos, um pouco acima, o caminho vai ser:
<code>*baseURL*/auth/register</code>
<br>
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<img src="src/imgReadme/linkAndJson.png" width="500" height="400" />
<br />
<br />
<br />

<hr />

<<<<<<< HEAD
### Adicione as chaves _JSON_ para o registro do novo usuário, e aperte _Send_

<br />
<br />
=======
### Adicione as chaves *JSON* para o registro do novo usuário, e aperte *Send*
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7


<<<<<<< HEAD
<br />
<img src="src/imgReadme/preencherJson.png" style="max-width=100%;" />
<br />
<br />
<br />
=======
#### Virá um retorno com a chave do novo usuário.
<br>
<img src="src/imgReadme/preencherJson.png" style="max-width=100%;">
<br>
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<hr />

### Agora iremos autenticar esse usuário, que também será uma requisição POST.

<br />
<br />

<img src="src/imgReadme/autenticar.png" style="max-width=100%;" />
<br />
<br />

#### Coloque o email e senha que você, acabou de criar!
<<<<<<< HEAD

<br />
<br />
<br />
=======
<br>
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

 ##### O caminho será:

<code>baseurl/auth/authenticate</code>
<br />
<br />

<<<<<<< HEAD
<img src="src/imgReadme/autenticando.png" style="max-width=100%;" />
<br />
<br />

#### Irá retornar um token, Copie ele:

<br />
<br />
<img src="src/imgReadme/token.png" style="max-width=100%;" />
<br />
<br />
=======

<img src="src/imgReadme/autenticando.png" style="max-width=100%;">
<br>
<br>

#### Irá retornar um token, Copie ele:
<br>
<br>
<img src="src/imgReadme/token.png" style="max-width=100%;">
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<br />

<hr />

<<<<<<< HEAD
### Vamos criar uma nova chave, para o objeto no _Environments_ (Onde criamos a BASEURL)

<br />
<br />
=======
### Vamos criar uma nova chave, para o objeto no *Environments* (Onde criamos a BASEURL)
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<div style="max-width: 100%">
  <img src="src/imgReadme/novaChaveToken.png" style="max-width=100%;" />
  <br />
  <br />

<<<<<<< HEAD
  <img src="src/imgReadme/adicionadoTOken.png" style="max-width=100%;" />
=======

<img src="src/imgReadme/adicionadoTOken.png" style="max-width=100%;">
>>>>>>> parent of aa94769... Mais readme 7
</div>
<br />
<br />
<br />
<br />

<hr />

<<<<<<< HEAD
### Agora iremos criar uma nova pasta, para fazermos as requisições do _CRUD_

<br />
=======
### Agora iremos criar uma nova pasta, para fazermos as requisições do *CRUD*
<br>
>>>>>>> parent of aa94769... Mais readme 7

<img src="src/imgReadme/addnovoFolder.png" style="max-width=100%;" />
<br />
<br />


#### A pasta vai se chamar CRUD, e terá essa organização. <strong>ATENÇÂO</strong>
se atente as configurações das requisições da API:
<br />
<br />

<<<<<<< HEAD
<img src="src/imgReadme/pastaCrud.png" style="max-width=100%;" />
<br />
<br />

<hr />

### Agora iniciaremos as requisições do CRUD(Nessa parte, iremos usar a chave token, que criamos):

<br />
<br />
=======

<img src="src/imgReadme/pastaCrud.png" style="max-width=100%;">
<br>
<br>


<hr>

### Agora iniciaremos as requisições do CRUD(Nessa parte, iremos usar a chave token, que criamos):
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

#### E a base de endereço de nossas requisições é:

<code>baseUrl/projects</code>
<br />
<br />

<hr />

### O primeiro sera o CREATE
<<<<<<< HEAD

<br />
<br />

#### vamos configurar a autorização, clique em AUTH e depois em Bearer TOKEN

<br />
<br />
=======
<br>
<br>

#### vamos configurar a autorização, clique em AUTH e depois em Bearer TOKEN
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<img src="src/imgReadme/configBEARER.png" style="max-width=100%;" />
<br />
<br />

#### E depois clique em BODY e em JSON, depois preencha do jeito que achar melhor, e aperte SEND:
<<<<<<< HEAD

<br />
<br />
=======
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<img src="src/imgReadme/create.png" style="max-width=100%;" />
<br />
<br />

<hr />

### Agora vamos listar os projetos:
<<<<<<< HEAD

<br />
<br />

#### E seguiremos essa configuração no HEADER, e com essa BASE de URL!

<br />
<br />
=======
<br>
<br>

#### E seguiremos essa configuração no HEADER, e com essa BASE de URL!
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<img src="src/imgReadme/readingALL.png" style="max-width=100%;" />
<br />
<br />

<<<<<<< HEAD
<strong
  >Para requisitar somente um projeto, você pode usar o ID do projeto/usuário,para fazer a
  query</strong
>

<br />
=======

<strong>Para requisitar somente um projeto, você pode usar o ID do projeto/usuário,para fazer a query</strong>




<br>
>>>>>>> parent of aa94769... Mais readme 7
<i>
  <code>baseUrl/projects/ID</code>
</i>

<br />
<br />
<br />

<hr />

### Agora vamos fazer o UPDATE
<<<<<<< HEAD

<br />
<br />

#### Configurando a autorização(lembre-se, o ID do projeto é necessário):

<br />
<br />
=======
<br>
<br>

#### Configurando a autorização(lembre-se, o ID do projeto é necessário):
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<img src="src/imgReadme/deletando.png" style="max-width=100%;" /><br />
<br />
<br />

#### Fazendo o update:
<<<<<<< HEAD

<br />
<br />
<img src="src/imgReadme/update.png" style="max-width=100%;" />
<br />
<br />
=======
<br>
<br>
<img src="src/imgReadme/update.png" style="max-width=100%;">
<br>
<br>
>>>>>>> parent of aa94769... Mais readme 7

<hr />

### Agora vamos fazer, o DELETE( necessário também o ID do projeto/usuario):
<<<<<<< HEAD

<br />
=======
<br>
>>>>>>> parent of aa94769... Mais readme 7

Configure, e logo aperte SEND :
<br />
<br />

<img src="src/imgReadme/deletando.png" style="max-width=100%;" /><br />

<br />
<br />
<img src="src/imgReadme/configuracaoReading.png" style="max-width=100%;" />
<br />
<br />
<br />

Lembrete: Na aba *Header* voce coloca Authorization, bearer o token que copiamos no *Environments* 

<br />
<br />

<<<<<<< HEAD
<br />
<br />
<br />
<br />
<br />
=======



<br>
<br>
<br>
<br>
<br>




>>>>>>> parent of aa94769... Mais readme 7
