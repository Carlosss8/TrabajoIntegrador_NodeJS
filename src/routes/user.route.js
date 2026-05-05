import { Router } from "express";
import { getUsers, addUser, searchUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.post('/', addUser)

userRouter.get('/users/:id', searchUser)

userRouter.put('/users/:id', updateUser)

userRouter.delete('/users/:id', deleteUser)

export { userRouter }