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

router.get("/players/:id", async (req, res, next) => {
    const requestedId = req.params.id;
    try {
        const playerRepository = AppDataSource.getRepository(Player);
        const player = await playerRepository.find({
            where: {
                id: Number(requestedId)
            },
        })
        
        res.json({
            success: true,
            data: player
        });
    } catch (error) {
        console.error("Error fetching player:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch player",
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

export default router;