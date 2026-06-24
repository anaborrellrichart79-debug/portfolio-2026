import { createApplication, getApplicationsByUser } from "../models/application.js";

export const APPLICATION_STATUS = {
    WISHLIST: "wishlist",
    APPLIED: "applied",
    INTERVIEW: "interview",
    OFFER: "offer",
    REJECTED: "rejected"
};

export const createNewApplication = async (req, res) => {
    try {

        const application = await createApplication({
    
            user_id: req.user.id, // Obtener el ID del usuario autenticado
            job_offer_id: req.body.job_offer_id,
            status: APPLICATION_STATUS.WISHLIST,
            notes: req.body.notes
        });

        res.status(201).json(application);

    } catch (error) {

        console.log(error);

        res.status(500).json({ message:error.message, error });

    }
};

export const getUserApplications = async (req, res) => {
    try {
        const userId = req.user.id; // Obtener el ID del usuario autenticado
        const applications = await getApplicationsByUser(req.user.id);
        
        res.status(200).json(applications);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message:"Error al obtener las postulaciones" });
    }
};  
