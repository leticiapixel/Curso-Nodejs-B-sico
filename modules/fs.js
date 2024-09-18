const fs = require("fs");
const path = require("path");

// Criar pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");
  }
);

// Adicionar conteúdo ao arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Conteúdo adicionado ao arquivo!");
  }
);

// Ler conteúdo do arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.html"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Conteúdo do arquivo: ", data);
  }
);
