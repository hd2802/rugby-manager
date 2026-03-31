import { Router } from "express";
import leagueRoutes from "./leagueRoutes";
import teamRoutes from "./teamRoutes";
import playerRoutes from "./playerRoutes";

const router = Router();

router.use("/api", leagueRoutes);
router.use("/api", teamRoutes);
router.use("/api", playerRoutes);

router.get("/", (req, res) => {
    res.send("Hello world");
});

export default router;