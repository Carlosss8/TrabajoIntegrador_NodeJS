import { Router } from "express";
import { getMessages, addMessages, updateMessages, deleteMessages } from "../controllers/messages.controller.js";

const messageRouter = Router()

messageRouter.get('/', getMessages)

messageRouter.post('/', addMessages)

messageRouter.put('/:id', updateMessages)

messageRouter.delete('/:id', deleteMessages)

export { messageRouter }