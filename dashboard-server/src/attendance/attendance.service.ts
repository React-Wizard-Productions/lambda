import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { Repository } from 'typeorm';
import { AttendanceDTO } from './attendance.dto';
import { Students } from 'src/students/entities/students.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private attendanceRepository: Repository<Attendance>,
    @InjectRepository(Students) private studentRepository: Repository<Students>,
  ) {}

  public async addAttendance(
    studentId: string,
    dto: AttendanceDTO,
  ): Promise<AttendanceDTO> {
    const student = await this.studentRepository.findOneOrFail({
      id: studentId,
    });
    const newDto = { ...dto, student };
    return await this.attendanceRepository
      .save(newDto)
      .then(entity => AttendanceDTO.fromEntity(entity));
  }
}
