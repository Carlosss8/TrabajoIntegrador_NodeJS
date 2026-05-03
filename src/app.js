import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { userRouter } from "./routes/user.route"
import { connectMongoDb } from "./config/connectMongoDb"

const server = express()
const port = 3000

server.use(cors())
server.use(express.json())

server.use("/users", userRouter)

server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    connectMongoDb()
})

