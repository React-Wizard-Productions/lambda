import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Group } from 'src/group/entities/group.entity';

@Entity({ name: 'teamleads' })
export class TeamLead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  weekend: string;
}
