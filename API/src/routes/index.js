const {Router} = require("express")

const usersrRouter = require("./users.routes")

const routes = Router()

routes.use("/users", usersrRouter)

module.exports = routes