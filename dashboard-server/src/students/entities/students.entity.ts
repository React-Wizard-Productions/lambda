import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Attendance } from 'src/attendance/entities/attendance.entity';
import { Notes } from 'src/notes/entities/notes.entity';
import { Group } from 'src/group/entities/group.entity';

@Entity({ name: 'students' })
export class Students {
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

  @OneToMany(
    type => Attendance,
    attendance => attendance.student,
  )
  attendance: Attendance[];

  @OneToMany(
    type => Notes,
    notes => notes.student,
  )
  notes: Notes[];
}
