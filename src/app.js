import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";
import { messageRouter } from "./routes/messages.route.js";
import { chatRouter } from "./routes/chat.route.js";
import { connectMongoDb } from "./config/connectMongoDb.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const server = express()
const port = process.env.PORT || 3000;

server.use(cors())
server.use(express.json())
server.get("/", (req, res) => {
    res.json({
        success: true,
        data: null,
        message: "API de chat funcionando correctamente"
    });
});

server.use("/users", userRouter)
server.use("/chats", chatRouter)
server.use("/messages", messageRouter)
server.use(errorMiddleware);

server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
    connectMongoDb()
})

