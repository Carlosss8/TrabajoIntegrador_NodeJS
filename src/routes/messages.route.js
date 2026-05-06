import { Router } from "express";
import { getMessages, addMessages, updateMessages, deleteMessages } from "../controllers/messages.controller";

const messageRouter = Router()

messageRouter.get('/', getMessages)

messageRouter.post('/', addMessages)

messageRouter.put('/messages/:id', updateMessages)

messageRouter.delete('/messages/:id', deleteMessages)

export { messageRouter }