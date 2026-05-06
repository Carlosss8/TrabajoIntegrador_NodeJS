import { Router } from "express";
import { getChats, addChat, searchChat, deleteChat } from "../controllers/chat.controller.js"

const chatRouter = Router()

chatRouter.get('/', getChats)

chatRouter.post('/', addChat)

chatRouter.get('/:id', searchChat)

chatRouter.delete('/:id', deleteChat)

export { chatRouter }