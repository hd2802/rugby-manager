import { DataSource } from "typeorm"
import { League } from "./entities/League"
import { Team } from "./entities/Team"
import { Player } from "./entities/Player"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USER!,
    password: "",
    database: "rugby_manager",
    entities: [ League, Team, Player ],
    synchronize: true,
    logging: true
})
