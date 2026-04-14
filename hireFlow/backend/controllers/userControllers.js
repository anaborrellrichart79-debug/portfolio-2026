import { getAllUsers, createUser } from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
    const users = await getAllUsers();
    res.json(users);
    } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios" });
    }
};

export const createNewUser = async (req, res) => {
    try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
    } catch (error) {

    // ERROR DE EMAIL DUPLICADO
    if (error.code === "ER_DUP_ENTRY") {
        return res.status(400).json({
        message: "El email ya está registrado"
        });
    }

    res.status(500).json({
        message: "Error al crear usuario"
    });
    }
};