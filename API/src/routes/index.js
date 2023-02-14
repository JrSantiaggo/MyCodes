const {Router} = require("express")

const usersrRouter = require("./users.routes")
const notesRouter = require("./notes.routes")

const routes = Router()

routes.use("/users", usersrRouter)
routes.use("/notes", notesRouter)

module.exports = routes