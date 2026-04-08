import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { User } from "../user/User"
import { League } from "../league/League"
import { Player } from "../player/Player"
import { Team } from "../team/Team"


@Entity({ name: "saves" })
export class Save {
    @PrimaryGeneratedColumn()
    id: number = -1

    @ManyToOne(() => User, (user) => user.saves)
    @JoinColumn({ name: "save_id" })
    user!: User
}