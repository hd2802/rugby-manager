import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Team } from "../entities/Team";

const router = Router();

router.get("/teams", async (req, res) => {
    try {
        const teamRepository = AppDataSource.getRepository(Team);
        const teams = await teamRepository.find();
        
        res.json({
            success: true,
            data: teams,
            count: teams.length
        });
        
    } catch (error) {
        console.error("Error fetching teams:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch teams",
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

export default router;