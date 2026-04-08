import { DataSource } from "typeorm"
import { League } from "./modules/api/league/League"
import { Team } from "./modules/api/team/Team"
import { Player } from "./modules/api/player/Player"
import { User } from "./modules/auth/user/User"
import { Save } from "./modules/save/Save"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USER!,
    password: "",
    database: "rugby_manager",
    entities: [ League, Team, Player, User, Save ],
    synchronize: true,
    logging: true
})
