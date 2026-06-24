import { db } from "../config/database.js";

export const createApplication = async (applicationData) => {
    const { 
        user_id,
        job_offer_id,
        status = "wishlist",
        notes,
    } = applicationData;

    const [ result ] = await db.execute(
        `
        INSERT INTO applications (
        user_id,
        job_offer_id,
        status,
        notes,
        applied_date
        )
        VALUES (?,?,?,?,NOW())
        `,
        [user_id, job_offer_id, status, notes]
    );
    return {
        id: result.insertId,
        user_id,
        job_offer_id,
        status,
        notes,
        applied_date: new Date()
    };
};

export const getApplicationsByUser = async (userId) => {
    const [rows] = await db.execute( 
        `
        SELECT * FROM applications WHERE user_id = ?
        ORDER BY created_at DESC
        `,
        [userId]
    );
    return rows;
};