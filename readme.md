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
