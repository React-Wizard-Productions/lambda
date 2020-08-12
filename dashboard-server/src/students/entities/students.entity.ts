import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Attendance } from 'src/attendance/entities/attendance.entity';

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

  @OneToMany(type => Attendance, attendance => attendance.student)
  attendance: Attendance[]
}
