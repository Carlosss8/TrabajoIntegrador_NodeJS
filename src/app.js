import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";
import { connectMongoDb } from "./config/connectMongoDb.js";

const server = express()
const port = 3000

server.use(cors())
server.use(express.json())

server.use("/users", userRouter)
server.use("/chats", userRouter)
server.use("/messages", userRouter)

server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    connectMongoDb()
})

