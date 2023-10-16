# 1° Passo: Criar pasta e organizar estrutura do projeto
* Gerenciar projeto com gitBash
* Documentar passos e comandos
* Enviar para o gitHub

#### Criar pasta para a aplicação:
```
mkdir projetoBackend
```
#### Acessar pasta:
```
cd pojetoBakend
```
#### Criar arquivo para documentar projeto:
```
touch readme.md
```
* Arquivos com extensão .md, significam markdown, de marcação de texto. A ideia é marcar um texto informando o que é importante, o que é um tópico, o que são links e imagens, sem a necessidade de utilizar marcações mais complexas, como o HTML.
* Utilizar este arquivo para descrever as ações executadas, de forma que facilite o entendimento.

#### Iniciar o gerenciador de pacotes Node
```
npm init -y
```
* Deverá ser criado um arquivo packege.json na raíz do projeto

#### Instalar os pacotes
```
npm i express nodemon dotenv
```
* i = install (instalar)
* express = será o servidor da Api
* nodemon = atualiza os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente
  
#### Abrir VSCode
```
code .
```

## Criar arquivo .gitignore
```
nano .gtignore
```
* Com comando nano, podemos criar e editar um arquivo pelo terminal
* Ctrl + o: Salvar arquivo
* Enter: Confirmar
* Ctrl + x: Fechar o arquivo
* Este arquivo é utilizado para ignorar o envio de pastas e arquivos pro gitHub

#### Adicionar no arquivo .gitignore o nome da pasta criada após a instalação dos pacotes
```
node_modules
```
* Esta pasta node_modules não precisamos enviar pro gitHub, pois pode ser recriada com o comando 'npm install'

#### Criar estrutura de arquivos e pastas
```
mkdir src
```
#### Criar arquivos dentro da pasta src
```
touch src/app.js
```
* Arquivo responsável de criar a configuração da API
```
touch src/server.js
```
* Arquivo responsável em receber as configurações da aplicação e rodar a API

#### Criar pastas dentro da pasta src
```
mkdir src/config
```
* Pasta para gerenciar a conexão com o banco de dados
```
mkdir src/controllers
```
* Pasta para gerenciar as requisições das rotas e conexão com banco de dados
```
mkdir src/routes
```
* Pasta para gerenciar as rotas da API

#### Validar estrutura do projeto
* Confira se as pastas e arquivos estão corretas no VSCode

#### Enviar estrutura do projeto para o gitHub
* Inicializar o gerenciador de arquivos .git
```
git init
```
* Informar nome e email
```
git config --global user.name "FIRST_NAME"
```
```
 git config --global user.email "EMAIL@EXAMPLE.COM"
```
* Verificar arquivos que serão enviados ao gitHub 
```
git status
```
* Adicionar todos arquivos ao versionamento
```
git add .
```
* Salvar projeto e escrever comentário sobre o processo realizado
```
git commit -m 'data'
```
* Criar novo repositório no gitHub
* Clicar no ponto indicado na imagem para copiar a URL do repositório
* De volta ao terminal, executar o comando para definir a branch main
```
git branch -M main
```
* Informar o repositório que queremos enviar os arquivos
* Colar a URL do seu repositório copiada
```
git remote add origin COLAR_URL
```
* Enviar os arquivos para o gitHub
```
git push -u origin main
```

## Atualize a página no gitHub e verifique se os arquivos foram enviados
* Com o projeto no servidor remoto podemos remover os arquivos na nossa máquina
```
cd ..
```
* Comando para acessar uma pasta anterior
* Fechar o VSCode com o projeto aberto
```
rm -rf projetoBackend
```
* rm (remove): comando utilizado para apagar arquivo
* -r (recursive): apaga pastas e subpastas de forma recursiva
* -f (force): não pergunta confirmações
* projetoBackend: nome da pasta que contem os arquivos da aplicação

# 2° passo: Clonar o projeto do github, criar configuração da API e testar
* Comando clone do git
* Configurar pacotes instalados
* Criar comando para rodar o servidor
* Testar servidor

#### Copiar a url do projeto
* Acessar repositório do projeto no gitHub
* Clicar no botão verde '<> Code'
* Clicar no ícone para copiar a URL

#### Clonar o repositório na sua máquina
* Abrir o gitBash em um local do computador
* Digitar o comando 'git clone' junto com a URL do seu repositório
```
git clone URL_REPOSITÓRIO
```

#### Acessar pasta
* Digitar o comando 'cd' e o nome do seu repositório
* cd (change directory): acessar outra pasta
```
cd NOME_REPOSITÓRIO
```

#### Reinstalar os pacotes da aplicação
```
npm i
```
* Este comando irá recriar a pasta node_modules no projeto

#### Criar arquivo .env na raiz do projeto
* Este arquivo é utilizado para armazenar as variáveis que serão reutilizadas na aplicação
* Com o comando nano, podemos criar e editar um arquivo pelo termianal
* Ctrl + o: Salvar o arquivo
* Enter: Confirmar
* Ctrl + x: Fechar o arquivo
```
nano .env
```

#### Digitar no arquivo .env
```
PORT = 3008
```
* Variável que contém a porta que o servidor estará rodando
* Este arquivo .env não enviamos pro girHub, pois contém informações sensíveis do sistema

#### Adicionar arquivo .env no gitignore
```
nano .gitignore
```
```
.env
```

#### Abrir o VSCode
```
code .
```

#### Criar arquivo de exemplo para as variáveis necessárias da aplicação
* Como não enviamos o arquivo .env para o gitHub, precisamos criar o exemplo das variáveis necessárias da aplicação
* Este arquivo conterá apenas as variáveis, sem os valores correspondentes
```
nano .env.example
```

#### Adicionar no arquivo .env.example:
```
PORT =
```

#### Abrir o arquivo app.js e digitar o código
* Importar o pacote express (servidor)
```
const express = require('express');
```
* Importar o pacote dotenv, gerenciador de variáveis de ambiente
```
const dotenv = require('dotenv').config();
```
* Instanciar o express na variável app
```
const app = express();
```
* Setar a porta do servidor a partir do arquivo .env
* O operador condicional '||' significa 'OU', caso não tenha a variável PORT, será utilizado o valor '3333'
```
app.set('port', process.env.PORT || 3333);
```
* Exportar as configurações na variável app
```
module.exports = app;
```

#### Abrir o arquivo server.js e digitar os códigos
* Importar o arquivo app
```
const app = require('./app');
```
* Importar a porta do servidor
```
const port = app.get('port');
```
* Testar API com a função listen
* 1º parâmetro: passamos a porta do servidor
* 2º parâmetro: arrow function para retornar um console informando a porta que está rodando o servidor
```
app.listen(port, () => {
    console.log(`Running on port ${ port }!`);
});
```
### Depois de configurar os pacotes e o teste do servidor, vamos criar o comando para executar

#### Abrir o arquivo package.json e alterar a chave 'scripts'
* Substituir o comando 'test' pelo comando 'start' na linha 7
```
"start":"nodemon src/server.js"
```

#### Rodar o comando no terminal com gitBash
```
npm run start
```

#### Atualizar projeto no gitHub
* Adicionar todos arquivos ao versionamento
```
git add .
```
* Salvar projeto e escrever comentário sobre o processo realizado
```
git commit -m 'configuração do projeto'
```
* Enviar os arquivos atualizados para o gitHub
```
git push
```

### Atualize a página no gitHub e verifique se os arquivos foram atualizados
* Com o projeto no servidor remoto podemos remover os arquivos na nossa máquina
```
cd ..
```
* Comando para acessar uma pasta anterior
* Fechar o VSCode com o projeto aberto
```
rm -rf projetoBackend
```
* rm (remove): comando utilizado para apagar arquivo
* -r (recursive): apaga pastas e subpastas de forma recursiva
* -f (force): não pergunta confirmações
* projetoBackend: nome da pasta que contem os arquivos da aplicação

### Conclusão do Passo 2
#### URL do repositório com:
* Estrutura do projeto
* Arquivo readme de documentação dos passos realizados
* Configuração
* Retorno de teste da API

# Passo 3: Clonar o projeto do gitHub, criar a configuração do arquivo de rotas
* Comando clone do git
* Configurar arquivo routes

### Copiar a url do projeto
* Acessar repositório do projeto no gitHub
* Clicar no botão verde '<> Code'
* Clicar no ícone para copiar a URL

### Clonar o repositório na sua máquina
* Abrir o gitBash em um local do computador
* Digitar o comando 'git clone' junto com a URL do seu repositório
```
git clone URL_REPOSITÒRIO
```

### Acessar pasta:
```
cd NOME_REPOSITÓRIO
```

### Reinstalar os pacotes da aplicação 
```
npm i
```
* Este comando irá recriar a pasta node_modules no projeto

### Criar pastas dentro da pasta src
mkdir src/routes

### Criar arquivo dentro da pasta routes
```
touch src/routes/rotas.js
```
* Responsável pelas rotas que serão acessadas na API

### Abrir o VSCode
```
code .
```

### Abrir o arquivo rotas e digitar os códigos:
```
// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

router.get('/listar', (request, response) => {
    response.send('Método GET: listar informações');
});
router.post('/cadastrar', (request, response) => {
    response.send('Método POST: salvar informações');
});
router.put('/user/:id', (request, response) => {
    response.send('Método PUT: atualizar informações');
});
router.delete('/user/:id', (request, response) => {
    response.send('Método DELETE: remover informações');
});

module.exports = router;
```
 ### Abrir o arquivo app.js e adicionar o código
 * Precisamos importar o arquivo de rotas nas configurações na API
 ```
 const router = require('./routes/rotas');
 ```
 * Habilitar as rotas na aplicação
 * Esta linha deve ser inserida depois da criação da variável app
 ```
 app.use('/api', router);
 ```

 ### Atualizar projeto no gitHub
 * Adicionar todos os arquivos ao versionamento
 ```
 git add .
 ```

 * Salvar projeto e escrever comentário sobre o processo realizado
 ```
 git commit -m 'rotas do projeto'
 ```

 * Enviar os arquivos atualizados para o gitHub
 ```
 git push
 ```

 ## Atualize a página no gitHub e verifique se os arquivos foram atualizados 
 * Com o projeto no servidor remoto podemos remover os arquivos na nossa máquina
 ```
 cd ..
 ```
 * Comando para acessar uma pasta anterior
 * Fechar o VSCode com o projeto aberto
 ```
 rm rf- resumo_25-09
 ```

 * rm (remove): comando utilizado para apagar arquivo
* -r (recursive): apaga pastas e subpastas de forma recursiva
* -f (force): não pergunta confirmações
* projetoBackend: nome da pasta que contem os arquivos da aplicação

# Conclusão do Passo 3
### URL do repositório com:
* Estrutura do projeto
* Arquivo readme de documentação dos passos realizados
* Configuração
* Retorno de teste da API
* Arquivo de rotas com os métodos [GET, POST, PUT, DELETE]

# Passo 4: Testar rotas da API com o Insomnia
* Copiar url do repositório no gitHub
* Clonar repositório no computador com o gitBash
* Abrir o projeto no VSCode
* Aprender a utilizar o insomnia

#### Clonar o repositório na sua máquina:
```
git clone NOME_REPOSITORIO
```

#### Acessar pasta:
```
cd NOME_REPOSITORIO
```
#### Reinstalar os pacotes da aplicação:
```
npm i
```

#### Recriar arquivo .env
* Definir as variáveis no arquivo .env a partir das chaves definidas no arquivo .env.example

## Insomnia
Quando você está criando sua API, vai precisar testar as rotas que serão criadas no projeto, é possível utilizar o próprio browser para testar, mas ele só pode enviar requisições do tipo get, e os dados retornados não são apresentados já formatados. Para usar as outras requisições como post, put e delete, será necessário usar softwares de terceiros, e nesse caso, é o insomnia. Ele é um programa open source feito em javascript. O programa é um testador de rotas para APIs, como todos os outros (por exemplo o postman), você coloca a url da API e o caminho da rota.

#### Criar novo projeto:

* Realizar login no aplicativo Insomnia
* Abrir novo projeto (nome: projeto API)
* Criar uma coleção de requisições para o projeto (nome: testar rotas do passo 3)
* Criar a primeira requisição para a API clicando no botão 'New HTTP Request' no método GET
  * Todas as requisições da coleção ficam listadas no quadro da esquerda. 
  * Podemos alterar o nome da requisição clicando no ícone de seta para baixo e selecionando a opção 'Rename'.
  * É importante renomear as requisições para deixarmos personalizadas e com a descrição de responsabilidade de cada requisição.
* Descrever a url da nossa API com a porta que definimos (http://localhost:3000) e as rotas (/api/listar) que criamos no arquivo rotas.js do passo 3
```
http://localhost:3000
```
* Antes de clicar no botão 'Send' para executar a ação da rota, execute o comando 'npm start' no seu projeto para rodar a API e verifique se o retorno estará conforme a imagem a seguir, ou seja, rodando na porta definida para o servidor.

### URL do repositório com:
* Estrutura do projeto
* Arquivo readme de documentação dos passos realizados
* Configuração
* Retorno de teste da API
* Arquivo de rotas com os métodos [GET, POST, PUT, DELETE]
* Imagem de cada método testado no Insomnia dentro do arquivo readme, conforme exibido na conclusão do passo 4