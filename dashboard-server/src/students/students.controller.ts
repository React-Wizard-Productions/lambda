import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsDTO } from './students.dto';
import { plainToClass } from 'class-transformer';
import { AttendanceDTO } from 'src/attendance/attendance.dto';
import { AttendanceService } from 'src/attendance/attendance.service';
import { Attendance } from 'src/attendance/entities/attendance.entity';

@Controller('students')
export class StudentsController {
  constructor(
    private studentsService: StudentsService,
    private attendanceService: AttendanceService,
  ) {}

  @Get()
  public async getAllStudents(): Promise<StudentsDTO[]> {
    return await this.studentsService.getAllStudents();
  }

  @Get(':id')
  public async getStudent(@Param('id') id: string): Promise<StudentsDTO> {
    return await this.studentsService.getStudent(id);
  }

  @Post()
  public async addStudent(@Body() dto: StudentsDTO): Promise<StudentsDTO> {
    const studentDto = plainToClass(StudentsDTO, dto);
    return await this.studentsService.create(studentDto);
  }

  @Put(':id')
  public async updateStudent(
    @Param('id') id: string,
    @Body() dto: StudentsDTO,
  ): Promise<StudentsDTO> {
    const studentDto = plainToClass(StudentsDTO, dto);
    return await this.studentsService.update(id, studentDto);
  }

  @Delete(':id')
  public deleteStudent(@Param('id') id: string): Promise<number> {
    return this.studentsService.delete(id);
  }

  @Post(':id/attendance')
  public addAttendanceRecord(
    @Param('id') id: string,
    @Body() dto: AttendanceDTO,
  ): Promise<AttendanceDTO> {
    const attendanceDto = plainToClass(AttendanceDTO, dto);
    return this.attendanceService.addAttendance(id, attendanceDto);
  }

  @Post(':id/notes')
  public addNotes() {
    return {};
  }

  @Put(':id/assignment/:assignment_id')
  public updateStudentAssignment() {
    return {};
  }
}
