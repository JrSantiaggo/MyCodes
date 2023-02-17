const {Router} = require("express")

const usersrRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")

const routes = Router()

routes.use("/users", usersrRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes