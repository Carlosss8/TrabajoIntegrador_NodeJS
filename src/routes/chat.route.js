import { Router } from "express";
import { getChats, addChat, searchChat, deleteChat } from "../controllers/chat.controller.js"

const chatRouter = Router()

chatRouter.get('/', getChats)

chatRouter.post('/', addChat)

chatRouter.get('/users/:id', searchChat)

chatRouter.delete('/users/:id', deleteChat)