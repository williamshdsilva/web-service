
const objetivo = "Desenvolver um aplicativo de lista de compras";
const requisitos = ["Adicionar itens", "Remover itens", "Marcar como comprado"];

const tecnologias = {
  frontend: "React.js",
  backend: "Node.js",
  bancoDeDados: "MongoDB",
};

const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());

const listaDeCompras = [];

app.post("/adicionarItem", (req, res) => {
  const { item } = req.body;
  listaDeCompras.push(item);
  res.json({ mensagem: "Item adicionado com sucesso", lista: listaDeCompras });
});

app.delete("/removerItem/:indice", (req, res) => {
  const indice = req.params.indice;
  const itemRemovido = listaDeCompras.splice(indice, 1);
  res.json({ mensagem: "Item removido com sucesso", itemRemovido, lista: listaDeCompras });
});

app.put("/marcarComoComprado/:indice", (req, res) => {
  const indice = req.params.indice;
  listaDeCompras[indice].comprado = true;
  res.json({ mensagem: "Item marcado como comprado", lista: listaDeCompras });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

