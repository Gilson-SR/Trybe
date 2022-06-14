# DIA 2.2 - Git & GitHub - Entendendo os comandos

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Git & GitHub. Para isso aprendi a:

* Copiar um repositório já existente no GitHub para o seu computador;
  
  * Clonar repositório: `git clone URLdoRepositorio`

*Abrir Pull Requests;

*Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.
  
  * Remover arquivo após `commit`: `git rm exemplo.txt`
  
  * Retornar logs do projeto: `git log`
  
  * Criar uma `branch`: `git branch nomeBranch`
  
  * Selecionar `branch`: `git checkout nomeBranch`

  * Criar `branch` e selecioná-la: `git checkout -b nomeBranch` 
  
  * Recuperar `commit` deletado: `git checkout idLog~1 exemplo.txt`

  * Enviar alterações do repositório local para repositório remoto: `git push`

  * Enviar alterações do repositório remoto para repositório local sem incorporar no diretório de trabalho: `git fetch`

  * Mesclar `branch`: git merge

  * Enviar alterações do repositório remoto para repositório loca incorporando o diretório de trabalho: `git pull`