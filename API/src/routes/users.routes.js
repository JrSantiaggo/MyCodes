const { Router } = require("express")

const UserController = require("../controllers/UserController")


const usersrRouter = Router()



const userController = new UserController()

usersrRouter.post("/", userController.create)

usersrRouter.put("/:id", userController.update)

module.exports = usersrRouter