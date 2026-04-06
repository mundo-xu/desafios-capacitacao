1. Ter nodejs versão >= 18 instalada
2. IDE - preferencialmente o vscode, mas pode ser qualquer outra sublime, phstorm
3. Entendimento basico sobre api em nodejs, utilizando express
4. Entendimento basico de typescript

Desafio vai ser feito em tempo real, solucionando problema juntos com vocês.

**Versionamento de ferramentas utilizadas no desafio**

**Nodejs** 22.3.1

**npm** 10.9.2

**typescript** 6.0.1

DEsafio vai ser criar CRUD de pessoas armazenado em cache:

1. Criar um endpoint que salva informações como nome, email, data de nascimento em um objeto
   - Precisa ser salvo em arquivo simulando um banco de dados
   - Precisa ser ter um id unico gerado
2. Atualizar esse objeto/pessoa dentro do arquivo de cache através de um endpoint Patch
3. Buscar essa pessoa pelo id através de um url GET /:id
4. Buscar todas as pessoas dentro do banco em arquivo
5. Deletar pessoa utilizando um ID em uma url DELETE
