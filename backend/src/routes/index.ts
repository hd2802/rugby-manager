import { Router } from "express";
import leagueRoutes from "../modules/api/league/leagueRoutes";
import teamRoutes from "../modules/api/team/teamRoutes";
import playerRoutes from "../modules/api/player/playerRoutes";
import userRoutes from "../modules/user/userRoutes";
import saveRoutes from "../modules/save/saveRoutes"
import loginRoutes from "../modules/login/loginRoutes";

const router = Router();

router.use("/api", leagueRoutes);
router.use("/api", teamRoutes);
router.use("/api", playerRoutes);
router.use("/api", saveRoutes);

router.use("/auth", userRoutes);
router.use("/auth", loginRoutes)

router.get("/", (req, res) => {
    res.send("Hello world");
});

export default router;