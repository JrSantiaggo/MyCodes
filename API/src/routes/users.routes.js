const { Router } = require("express")

const usersrRouter = Router()

usersrRouter.post("/", (request, response) => {
  const { name, email, password} = request.body
 
  response.json({ name, email, password})
})

module.exports = usersrRouter