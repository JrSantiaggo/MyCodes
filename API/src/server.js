const { request } = require("express");
const express = require("express");

const app = express();
app.use(express.json());

//product?page=2&limit=10 = optional dps do ?
app.post("/users", (request, response) => {
  const { name, email, password} = request.body
 
  response.json({ name, email, password})
})

const PORT = 3333;

app.listen(PORT, console.log(`app is running on port ${PORT}`))