const fs = require("fs");

const lerArquivo = (caminho: string): unknown => {
  return JSON.parse(fs.readFileSync(caminho));
};

const escreverArquivo = (dados: any, caminho: string): void => {
  fs.writeFileSync(caminho, JSON.stringify(dados));
};

type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  profissao: string;
};

let usuario: Usuario = {
  nome: "Edson Gomes",
  email: "bidu@bidu.com",
  cpf: "12345678977",
  profissao: "Programador"
};
