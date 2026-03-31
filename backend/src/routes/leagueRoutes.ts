import { Router } from "express";
import { AppDataSource } from "../data-source";
import { League } from "../entities/League";

const router = Router();

router.get("/leagues", async (req, res) => {
    try {
        const leagueRepository = AppDataSource.getRepository(League);
        const leagues = await leagueRepository.find({
            relations: {
                teams: true
            }
        });
        
        res.json({
            success: true,
            data: leagues,
            count: leagues.length
        });
    } catch (error) {
        console.error("Error fetching leagues:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch leagues",
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

export default router;