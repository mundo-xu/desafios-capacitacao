import { Router } from "express";
import { pessoaController } from "../../app/controllers";

const pessoaRoute = Router();

pessoaRoute.get("/", pessoaController.listarPessoas);

pessoaRoute.get("/:id", pessoaController.obterPessoaPorId);

pessoaRoute.post("/", pessoaController.criarPessoa);

pessoaRoute.patch("/:id", pessoaController.atualizarPessoa);

pessoaRoute.delete("/:id", pessoaController.excluirPessoa);

export default pessoaRoute;
