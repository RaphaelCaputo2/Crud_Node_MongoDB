# Bem vindo ao repositório de CRUD com NodeJs + Express + MongoDb do candidato Raphael Caputo:

## Tecnologias que foram utilizadas:
* NodeJs + Express (para fazer as rotas das API)
* MongoDB (banco de dados)
* JWT (Token para autenticação que expira em 24h)
* CryptoJS (Cria uma hash que deixa o password encriptado)
<br>
<hr>

## O que é necessário:
* NodeJs 11.x.x
* Insomnia Para testar a API [Download Aqui](https://insomnia.rest/download/)
<br>
<hr>

## Features: <br>

* *EndPoint* de Registro:<br>
 <http://localhost:3000/auth/register>
  
* *EndPoint* de Autenticação:<br>
  <http://localhost:3000/auth/authenticate>
  
* *EndPoint* de Forgot Password:<br>
 <http://localhost:3000/auth/forgot_password>* 
  
* *EndPoint* de Reset Password:<br>
   <http://localhost:3000/auth/reset_password>*

 * *EndPoint* de listar todos os projeto:<br>
   <http://localhost:3000/projects>
  
#### para acessar as endPoint do Forgot e reset password, é necessário configuração do [mailtrap](https://mailtrap.io/inboxes)

<hr>


### Para fazer o crud, é necessário estar autenticado com o token.

## Vamos registrar, e autenticar com o token que iremos gerar:
<br>

* Faça o clone do projeto
<code>git clone https://github.com/RaphaelCaputo2/vagas.git</code><br>

* Navege ate a pasta do Projeto<br>
<code>cd Vagas</code><br>

* Instale as dependências<br>
<code>npm install</code>

* Inicie o servidor<br>
<code>npm start</code>


## Configurando o [Insomnia](https://insomnia.rest/download/)
### Inicie o insomnia, clique em *New Workspace* e escolha o nome do seu *Workspace*

<img src="src/imgReadme/Iniciando_config.png" alt="Iniciando_configuracao" width="400" />

<hr />

### Adicione um Ambiente base (poderá ser usado em todo o Workspace)!
#### Clique em *Manage Environments*:

<p>
<img src="src/imgReadme/config_environments.png" alt="environments" 
 width="200" height="320">
<img src="src/imgReadme/add_base.png" alt="adicionar_http" width="400">
</p>
<hr>

#### Pronto, agora ja temos nossa base de URL preparada

<hr>

### Agora vamos Organizar as pastas para nossas requisições

#### Crie duas Pastas, uma será nossa *Autenticação* e outra chamada *CRUD*

<img src="src/imgReadme/add_folder.png" alt="Adicionando pasta" style="max-width=100%;">

<hr />

### Feito isso, agora vamos fazer nossas requisições de registro para nossa API

<div style="max-width=100%;">
  <img src="src/imgReadme/new_register.png" />
</div>

#### Vai ser feito como POST a nossa requisição
<img src="src/imgReadme/add_post_request.png" height="350" />

<hr>

#### Feito isso, vamos a configuração da nossa requisição, nossa *BASEURL* que criamos, um pouco acima, o endpoint vai ser:
<code>*baseURL*/auth/register</code>

<img src="src/imgReadme/linkAndJson.png" width="500" height="400" />

<hr />

### Adicione as chaves *JSON* para o registro do novo usuário, e aperte *Send*

#### Virá um retorno com a chave do novo usuário.
<br>
<img src="src/imgReadme/preencherJson.png" style="max-width=100%;">

<hr />

### Agora iremos autenticar esse usuário, que também será uma requisição POST.

<img src="src/imgReadme/autenticar.png" style="max-width=100%;" />


#### Coloque o email e senha que você, acabou de criar!

 ##### O endpoint será:

<code>baseurl/auth/authenticate</code>


<img src="src/imgReadme/autenticando.png" style="max-width=100%;">

#### Irá retornar um token, Copie ele:
<br>
<img src="src/imgReadme/token.png" style="max-width=100%;">


<hr />

### Vamos criar uma nova chave, para o objeto no *Environments* (Onde criamos a BASEURL)

<div style="max-width: 100%">
  <img src="src/imgReadme/novaChaveToken.png" style="max-width=100%;" />


<img src="src/imgReadme/adicionadoTOken.png" style="max-width=100%;">
</div>


<hr />

### Agora iremos criar uma nova pasta, para fazermos as requisições do *CRUD*

<img src="src/imgReadme/addnovoFolder.png" style="max-width=100%;" />

#### A pasta vai se chamar CRUD, e terá essa organização. <strong>ATENÇÂO</strong>
se atente as configurações das requisições da API:

<img src="src/imgReadme/pastaCrud.png" style="max-width=100%;">

<hr>

### Agora iniciaremos as requisições do CRUD(Nessa parte, iremos usar a chave token, que criamos):

#### E a base de endereço de nossas requisições é:

<code>baseUrl/projects</code>

<hr />

### O primeiro sera o CREATE

#### vamos configurar a autorização, clique em AUTH e depois em Bearer TOKEN

<img src="src/imgReadme/configBEARER.png" style="max-width=100%;" />

#### E depois clique em BODY e em JSON, depois preencha do jeito que achar melhor, e aperte SEND:

<img src="src/imgReadme/create.png" style="max-width=100%;" />
<hr />

### Agora vamos listar os projetos:

#### E seguiremos essa configuração no HEADER, e com essa BASE de URL!

<img src="src/imgReadme/readingALL.png" style="max-width=100%;" />

<strong>Para requisitar somente um projeto, você pode usar o ID do projeto/usuário,para fazer a requisição</strong>

<i>
  <code>baseUrl/projects/ID</code>
</i>

<hr>

### Agora vamos fazer o UPDATE

#### Configurando a autorização(lembre-se, o ID do projeto é necessário):

<img src="src/imgReadme/deletando.png" style="max-width=100%;" /><br />

#### Fazendo o update:

<img src="src/imgReadme/update.png" style="max-width=100%;">

<hr>

### Agora vamos fazer, o DELETE (necessário também o ID do projeto/usuario):

Configure, e logo depois aperte SEND :

Lembrete: Na aba *Header* voce coloca <i>Authorization</i>, <i>bearer + o token</i> que copiamos no *Environments* 

<img src="src/imgReadme/deletando.png" width="350"> <img src="src/imgReadme/configuracaoReading.png" width="350">
<hr>

## Recuperando e resetando a senha!

### Para resetar e recuperar a sennha é necessário cadastro no [mailTrap](https://mailtrap.io/inboxes), iremos usar esse serviço para simular uma recuperação, pois ele simula uma caixa de email!

<p> Entre no link (https://mailtrap.io/inboxes), e cadastre-se, assim que terminar o cadastro,
vá na aba de configurações
<img src="/src/imgReadme/mailtrap1.png/"><br>
Selecione <i>Nodemailer</i>
<img src="/src/imgReadme/mailtrap2.png"><br>
Copie a váriavel.</p>

<p> Agora voltamos ao vsCode ou seu editor de preferência, vá no arquivo
<code>src/config/mail.json</code>
Apague o JSON que esta la, e cole o que voce copiou. Pronto, agora ja configuramos a porta, usuario e password para enviar o email de recuperação.</p>

#### Voltamos ao Insomnia para fazer as requisições

<p>Primeiro, iremos fazer duas requisições a API com o método POST
<img src="/src/imgReadme/forgot1.png">
</p>

<p>Depois criar o endpoint e qual email queremos, o endpoint sera
<code>baseUrl/auth/forgot_password</code>
O email pode ser algum que voce criou no começo, ele precisa estar no banco de dados,
pois assim iremos resetar somente a senha.
</p>

<p>Agora iremos la no mailTrap ver nosso "inbox", la iremos encontrar o token que irá resetar nossa senha
<img src="/src/imgReadme/mailtrapToken.png">
Copie somente o <i>token</i>
 </p>

 <p>Com o token em mãos, vamos agora resetar a senha no insomnia
 o endpoint para fazer o reset é:<br>
 <code>baseUrl/auth/reset_password</code>
 Ficará assim:

 <img src="/src/imgReadme/forgot3.png">
 </p>

 <p>Depois iremos autenticar a nova senha:<br>
 no endPoint:

 <code>baseUrl/auth/authenticate</code>

 <img src="/src/imgReadme/forgot4.png">

<hr>

