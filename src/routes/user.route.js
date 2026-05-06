import { Router } from "express";
import { getUsers, addUser, searchUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.post('/', addUser)

userRouter.get('/:id', searchUser)

userRouter.put('/:id', updateUser)

userRouter.delete('/:id', deleteUser)

export { userRouter }