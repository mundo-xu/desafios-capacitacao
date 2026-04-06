import { Request, Response } from "express";
import { pessoaService } from "../services";

// Controladores são responsaveis por tratar os dados recebidos das rotas e enviar as respostas.

export async function listarPessoas(req: Request, res: Response) {
  const pessoas = await pessoaService.listarPessoas();
  res.json(pessoas);
}

export async function obterPessoaPorId(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const pessoa = await pessoaService.obterPessoaPorId(Number(id));
    res.json(pessoa);
  } catch (error: Error | any) {
    return res.status(404).json(error.message);
  }
}

export async function criarPessoa(req: Request, res: Response) {
  if (!req.body.nome || !req.body.dataNascimento || !req.body.email) {
    return res.status(400).json({
      message: "Dados incompletos, informe nome, data de nascimento e email",
    });
  }

  try {
    const novaPessoa = await pessoaService.criarPessoa(req.body);
    res.status(201).json(novaPessoa);
  } catch (error: Error | any) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function atualizarPessoa(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const pessoaAtualizada = await pessoaService.atualizarPessoa(
      Number(id),
      req.body,
    );
    res.json(pessoaAtualizada);
  } catch (error: Error | any) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function excluirPessoa(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const mensagem = await pessoaService.excluirPessoa(Number(id));
    return res.status(200).json(mensagem);
  } catch (error: Error | any) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
