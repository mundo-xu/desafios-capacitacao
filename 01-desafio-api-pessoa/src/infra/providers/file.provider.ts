import fs from "fs/promises";
import path from "path";

const caminhoParaAssets = path.join(__dirname, "../../assets");

type EscreverArquivoParams = {
  nomeArquivo: string;
  conteudo: any;
};
export async function escreverArquivoJson({
  nomeArquivo,
  conteudo,
}: EscreverArquivoParams): Promise<void> {
  await fs.writeFile(
    path.join(caminhoParaAssets, nomeArquivo),
    JSON.stringify(conteudo, null, 2),
    "utf-8",
  );
}

export async function lerArquivoJson(nomeArquivo: string): Promise<any> {
  const conteudo = await fs.readFile(
    path.join(caminhoParaAssets, nomeArquivo),
    "utf-8",
  );

  return JSON.parse(conteudo);
}
