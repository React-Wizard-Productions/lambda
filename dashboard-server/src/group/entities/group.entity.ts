import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from "typeorm";
import { Students } from "src/students/entities/students.entity";
import { TeamLead } from "src/teamlead/entities/teamlead.entity";

@Entity({name: 'groups'})
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(type => Students, students => students.groups)
    students: Students[]

    @ManyToMany(type => TeamLead, teamLeads => teamLeads.groups)
    teamLeads: TeamLead[]

    @Column({nullable: false})
    name: string

    @Column({nullable: false, default: 'main'})
    type: string
}