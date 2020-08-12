import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Students } from "src/students/entities/students.entity";

@Entity({name: 'attendance'})
export class Attendance {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => Students, students => students.attendance)
    student: Students

    @Column({nullable: true})
    reason: string

    @Column()
    dateMissed: Date
}