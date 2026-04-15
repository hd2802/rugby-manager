import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { User } from "../auth/User"

@Entity({ name: "saves" })
export class Save {
    @PrimaryGeneratedColumn()
    id: number = -1

    @ManyToOne(() => User, (user) => user.saves)
    @JoinColumn({ name: "save_id" })
    user!: User
}