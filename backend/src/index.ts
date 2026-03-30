import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";

dotenv.config();

import { AppDataSource } from "./data-source"

import { League } from "./entities/League"

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/api/leagues", async (req, res) => {
    try {
        const leagueRepository = AppDataSource.getRepository(League);
        const leagues = await leagueRepository.find();
        
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

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
        process.exit(1);
    });

export default app;