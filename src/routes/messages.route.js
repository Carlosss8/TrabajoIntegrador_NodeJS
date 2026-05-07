import { Router } from "express";
import { getMessages, getMessagesByChat, addMessages, updateMessages, deleteMessages } from "../controllers/messages.controller.js";

const messageRouter = Router()

messageRouter.get("/", getMessages)

messageRouter.get("/chat/:chatId", getMessagesByChat)

messageRouter.post('/', addMessages)

messageRouter.put('/:id', updateMessages)

messageRouter.delete('/:id', deleteMessages)

export { messageRouter }