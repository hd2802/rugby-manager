import { DataSource } from "typeorm"
import { League } from "./entities/League"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USER!,
    password: "",
    database: "rugby_manager",
    entities: [ League ],
    synchronize: true,
    logging: true
})
