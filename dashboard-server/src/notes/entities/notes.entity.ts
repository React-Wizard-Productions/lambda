import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Students } from 'src/students/entities/students.entity';

@Entity({ name: 'notes' })
export class Notes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    type => Students,
    students => students.notes,
  )
  student: Students;

  @Column({ nullable: false })
  notes: string;

  @Column({ default: false })
  isArchived: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
