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

const detalharUsuario = (cpf: string): Usuario => {
  const bd = lerArquivo() as Usuario[];
  const usuario = bd.find((usuario) => {
    return usuario.cpf === cpf;
  });
  if (!usuario) {
    throw new Error("Usuario não encontrado");
  }
  return usuario;
};

const atualizarUsuario = (cpf: string, dados: Usuario): void => {
  const bd = lerArquivo() as Usuario[];
  const usuario = bd.find((usuario) => {
    return usuario.cpf === cpf;
  });
  if (!usuario) {
    throw new Error("Usuario não encontrado");
  }

  Object.assign(usuario, dados); // Usado para copiar valores de todas as propriedades de um objeto pelo outro
  console.log(usuario);
};

const excluirUsuario = (cpf: string): Usuario => {
  const bd = lerArquivo() as Usuario[];
  const usuario = bd.find((usuario) => {
    return usuario.cpf === cpf;
  });
  if (!usuario) {
    throw new Error("Usuario não encontrado");
  }

  const exclusao = bd.filter((usuario) => {
    return usuario.cpf != cpf;
  });
  escreverArquivo(exclusao);

  return usuario;
};

const filtrarUsuario = (filtro?: string): Usuario[] => {
  const bd = lerArquivo() as Usuario[];

  const usuarios = bd.filter((usuario) => {
    if (filtro) {
      return usuario.profissao === filtro;
    }

    return usuario;
  });

  return usuarios;
};
/*const edson = cadastroUsuario({
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
});*/

/*cadastroUsuario({
    nome: "Junior Santos",
    email: "bidu@bidu.com",
    cpf: "12345678977",
    profissao: "Frontend",
    endereco: {
      cep: "07918120",
      rua: "aldo lupo",
      complemento: "casa 02",
      bairro: "aparecida",
      cidade: "morato"
    }
  });*/

/*atualizarUsuario("12345678977", {
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
});*/
//console.log(edson);
console.log(filtrarUsuario("Frontend"));

//console.log(excluirUsuario("12345678977"));
