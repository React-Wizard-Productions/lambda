import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
