import { Router } from "express";
import leagueRoutes from "./leagueRoutes";
import teamRoutes from "./teamRoutes";
import playerRoutes from "./playerRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/api", leagueRoutes);
router.use("/api", teamRoutes);
router.use("/api", playerRoutes);
router.use("/auth", userRoutes);

router.get("/", (req, res) => {
    res.send("Hello world");
});

export default router;