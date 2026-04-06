import { fileProvider } from "../../infra/providers";

type PessoaDto = {
  nome: string;
  dataNascimento: Date;
  email: string;
};

type PessoasDB = {
  idCount: number;
  pessoas: Array<{
    id: number;
    nome: string;
    dataNascimento: Date;
    email: string;
  }>;
};

const cacheDbFile = "pessoas.json";

export async function criarPessoa({ nome, dataNascimento, email }: PessoaDto) {
  const db: PessoasDB = await fileProvider.lerArquivoJson(cacheDbFile);
  const pessoasExists = db.pessoas.some((pessoa) => pessoa.email === email);

  if (pessoasExists) {
    throw new Error("Pessoa com este email já existe");
  }

  db.idCount += 1;
  db.pessoas.push({
    id: db.idCount,
    nome,
    dataNascimento,
    email,
  });

  await fileProvider.escreverArquivoJson({
    nomeArquivo: cacheDbFile,
    conteudo: db,
  });

  return db.pessoas[db.pessoas.length - 1];
}

export async function listarPessoas() {
  // Lógica para listar pessoas
  const db: PessoasDB = await fileProvider.lerArquivoJson(cacheDbFile);
  return db.pessoas;
}

export async function obterPessoaPorId(id: number) {
  // Lógica para obter uma pessoa por ID
  const db: PessoasDB = await fileProvider.lerArquivoJson(cacheDbFile);
  const pessoa = db.pessoas.find((p) => p.id === id);

  if (!pessoa) {
    throw new Error("Pessoa não encontrada");
  }
  return pessoa;
}

type AtualizarPessoaDto = {
  nome?: string;
  dataNascimento?: Date;
};
export async function atualizarPessoa(
  id: number,
  { nome, dataNascimento }: AtualizarPessoaDto,
) {
  // Lógica para atualizar uma pessoa
  const db: PessoasDB = await fileProvider.lerArquivoJson(cacheDbFile);

  const pessoaIndex = db.pessoas.findIndex((p) => p.id === id);

  if (pessoaIndex === -1) {
    throw new Error("Pessoa não encontrada");
  }

  db.pessoas[pessoaIndex] = {
    ...db.pessoas[pessoaIndex],
    nome: nome ?? db.pessoas[pessoaIndex].nome,
    dataNascimento: dataNascimento ?? db.pessoas[pessoaIndex].dataNascimento,
  };

  await fileProvider.escreverArquivoJson({
    nomeArquivo: cacheDbFile,
    conteudo: db,
  });

  return db.pessoas[pessoaIndex];
}

export async function excluirPessoa(id: number) {
  // Lógica para excluir uma pessoa
  const db: PessoasDB = await fileProvider.lerArquivoJson(cacheDbFile);
  const pessoaIndex = db.pessoas.findIndex((p) => p.id === id);

  if (pessoaIndex === -1) {
    throw new Error("Pessoa não encontrada");
  }

  db.pessoas.splice(pessoaIndex, 1);

  await fileProvider.escreverArquivoJson({
    nomeArquivo: cacheDbFile,
    conteudo: db,
  });
  return "Pessoa excluída com sucesso";
}
