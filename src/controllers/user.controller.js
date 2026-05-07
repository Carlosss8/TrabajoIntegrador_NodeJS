import { User } from "../models/user.model.js";

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

const addUser = async (req, res) => {
    const newUser = await User.create({
        name: body.name,
        email: body.email
    });

    res.status(201).json({
        success: true,
        data: newUser,
        message: "Usuario agregado correctamente"
    });
}

const searchUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const update = await User.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    res.json({ status: 'Usuario actualizado', update });
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.json({ status: 'Usuario eliminado' });
}

export { getUsers, addUser, searchUser, updateUser, deleteUser }