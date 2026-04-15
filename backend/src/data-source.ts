import { DataSource } from "typeorm"
import { League } from "./models/api/League"
import { Team } from "./models/api/Team"
import { Player } from "./models/api/Player"
import { User } from "./models/auth/User"
import { Save } from "./models/save/Save"

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
