import { db } from "../config/database.js";

// GET ALL USERS
export const getAllUsers = async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
};

// CREATE USER
export const createUser = async (user) => {
    if (!user.name || !user.email) {
        throw new Error("Nombre y email son obligatorios");
    }

    const [result] = await db.query(
    "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)",
    [user.name, user.email, "temp123", user.role || "candidate"]
);

    return {
    id: result.insertId,
    ...user
    };
};