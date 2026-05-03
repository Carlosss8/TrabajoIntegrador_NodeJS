import mongoose from "mongoose";
import { Router } from mongoose
import { User } from "../models/user.model.js";
import { use } from "react";
import { getUsers, addUser, searchUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.get('/users', getUsers)

userRouter.post('/users', addUser)

userRouter.get('/users/:id', searchUser)

userRouter.put('/users/:id', updateUser)

app.delete('/users/:id', deleteUser)

export { userRouter }