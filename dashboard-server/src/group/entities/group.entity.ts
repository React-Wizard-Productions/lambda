import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  Column,
  JoinTable,
} from 'typeorm';
import { Students } from 'src/students/entities/students.entity';
import { TeamLead } from 'src/teamlead/entities/teamlead.entity';

@Entity({ name: 'groups' })
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(type => Students, { cascade: true })
  @JoinTable()
  students: Students[];

  @ManyToMany(type => TeamLead, { cascade: true })
  @JoinTable()
  teamLeads: TeamLead[];

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, default: 'main' })
  type: string;
}
