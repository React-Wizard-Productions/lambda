import { Students } from './entities/students.entity';
import { Attendance } from 'src/attendance/entities/attendance.entity';
import { Notes } from 'src/notes/entities/notes.entity';

export class StudentsDTO implements Readonly<StudentsDTO> {
  id: string;
  firstName: string;
  lastName: string;
  weekend: string;
  github: string;
  attendance: Attendance[];
  notes: Notes[];

  public static from(dto: Partial<StudentsDTO>) {
    const student = new StudentsDTO();
    student.id = dto.id;
    student.firstName = dto.firstName;
    student.lastName = dto.lastName;
    student.github = dto.github;
    student.weekend = dto.weekend;
    student.attendance = dto.attendance;
    student.notes = dto.notes;
    return student;
  }

  public static fromEntity(student: Students) {
    return this.from({
      id: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      github: student.github,
      weekend: student.weekend,
      attendance: student.attendance,
      notes: student.notes,
    });
  }

  public toEntity() {
    const student = new Students();
    student.id = this.id;
    student.firstName = this.firstName;
    student.lastName = this.lastName;
    student.github = this.github;
    student.weekend = this.weekend;
    return student;
  }
}
