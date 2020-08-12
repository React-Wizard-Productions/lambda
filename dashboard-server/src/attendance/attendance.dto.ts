import { Attendance } from './entities/attendance.entity';
import { Students } from 'src/students/entities/students.entity';

export class AttendanceDTO implements Readonly<AttendanceDTO> {
  id: string;
  student: Students;
  reason: string;
  dateMissed: Date;

  public static from(dto: Partial<AttendanceDTO>) {
    const newAttendanceDto = new AttendanceDTO();
    newAttendanceDto.id = dto.id;
    newAttendanceDto.reason = dto.reason;
    newAttendanceDto.dateMissed = dto.dateMissed;
    return newAttendanceDto;
  }

  public static fromEntity(entity: Attendance) {
    return this.from({
      id: entity.id,
      reason: entity.reason,
      dateMissed: entity.dateMissed,
    });
  }

  public toEntity(student: Students) {
    const newAttendance = new Attendance();
    newAttendance.id = this.id;
    newAttendance.student = student;
    newAttendance.reason = this.reason;
    newAttendance.dateMissed = new Date();
    return newAttendance;
  }
}
