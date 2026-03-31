import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Player } from "../entities/Player";

const router = Router();

router.get("/players", async (req, res) => {
    try {
        const playerRepository = AppDataSource.getRepository(Player);
        const players = await playerRepository.find();
        
        res.json({
            success: true,
            data: players,
            count: players.length
        });

    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch players",
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

export default router;