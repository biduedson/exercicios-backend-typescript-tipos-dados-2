const fs = require("fs");

const lerArquivo = (): unknown => {
  return JSON.parse(fs.readFileSync("./bd.json"));
};

const escreverArquivo = (dados: any): void => {
  fs.writeFileSync("./bd.json", JSON.stringify(dados));
};

type Endereco = {
  cep: string;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
};

type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  profissao: string;
  endereco: Endereco;
};

let usuario: Usuario = {
  nome: "Edson Gomes",
  email: "bidu@bidu.com",
  cpf: "12345678977",
  profissao: "Programador",
  endereco: {
    cep: "07918120",
    rua: "aldo lupo",
    complemento: "casa 02",
    bairro: "aparecida",
    cidade: "morato"
  }
};

const cadastroUsuario = (usuario: Usuario): Usuario => {
  const bd = lerArquivo() as Usuario[];
  bd.push(usuario);
  escreverArquivo(bd);
  return usuario;
};

const listarUsuarios = (): Usuario[] => {
  return lerArquivo() as Usuario[];
};

const edson = cadastroUsuario({
  nome: "Antonio Carlos",
  email: "bidu@bidu.com",
  cpf: "12345678977",
  profissao: "Programador",
  endereco: {
    cep: "07918120",
    rua: "aldo lupo",
    complemento: "casa 02",
    bairro: "aparecida",
    cidade: "morato"
  }
});

const bd = lerArquivo();

console.log(edson, bd);
