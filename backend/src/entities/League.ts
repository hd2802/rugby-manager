import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "leagues" })
export class League {
    @PrimaryGeneratedColumn()
    id: number = -1

    @Column({ type: "varchar", length: 255})
    name: string = ""
}