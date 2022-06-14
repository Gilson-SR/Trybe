# DIA 2.1 - Git & GitHub - O que é e para que serve

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Git & GitHub. Para isso aprendi a:

* Instalar e configurar o Git no meu computador;

    * Instalando o Git via terminal com o comando: `sudo apt-get install git-all`

    * Configurando identidade:
        * Configurando nome: `git config --global user.name "Seu nome"`
        * Configurando e-mail: `git config --global user.email seuemail@exemplo.br`

    * Confirmação da configuração de identidade: `git config --list`

* Salvar projetos no repositório Git local;

    * Inicializar Git no diretório local: `git init`

* Controlar as alterações e versões dos meus arquivos;

    * Adicionar alterações feitas no diretório ativo: `git add exemplo.txt`
    * Salvando alterações na área de staging: `git commit -m 'mensagem'`

* Enviar projetos para meu repositório remoto GitHub;

    * Sincronizando repositório local e remoto: `git remote add origin "URL do repositório"`
    * Verificando a URL remota: `git remote -v`
    * Enviando alterações do repositório local para o repositório remoto setando como upstream: `git push -u origin main`