import { User } from "../models/user.model.js";

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            data: users,
            message: "Usuarios obtenidos correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const addUser = async (req, res, next) => {
    try {
        const body = req.body;

        const newUser = await User.create({
            name: body.name,
            email: body.email
        });

        res.status(201).json({
            success: true,
            data: newUser,
            message: "Usuario agregado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const searchUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: user,
            message: "Usuario encontrado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const update = await User.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!update) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: update,
            message: "Usuario actualizado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            success: true,
            data: deletedUser,
            message: "Usuario eliminado correctamente"
        });
    } catch (error) {
        next(error);
    }
};

export { getUsers, addUser, searchUser, updateUser, deleteUser };