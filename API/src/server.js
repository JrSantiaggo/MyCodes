const { request } = require("express");
const express = require("express");

const app = express();

app.get("/hello/:id/:user", (request, response) => {
  const {id, user} = request.params
  response.send(`
    id da mensagem: ${id} para o usuário ${user}
  `)
})


//product?page=2&limit=10 = optional dps do ?
app.get("/product", (request, response) => {
  const {page, limit} = request.query

  response.send(`Produto na página ${page} com limite de ${limit} cards`)
})

const PORT = 3333;

app.listen(PORT, console.log(`app is running on port ${PORT}`))