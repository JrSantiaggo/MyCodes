const { Router } = require("express")

const UserController = require("../controllers/UserController")


const usersrRouter = Router()



function myMiddleware(request, response, next){
  const {isAdmin} = request.body
  if(!isAdmin){
    return response.json({ message: "user unauthorized"})
  }
  next()
}






const userController = new UserController()

usersrRouter.post("/", myMiddleware, userController.create)

module.exports = usersrRouter