import { DataSource } from "typeorm"
import { League } from "./entities/League"
import { Team } from "./entities/Team"
import { Player } from "./entities/Player"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USER!,
    password: "",
    database: "rugby_manager",
    entities: [ League, Team, Player, User ],
    synchronize: true,
    logging: true
})
