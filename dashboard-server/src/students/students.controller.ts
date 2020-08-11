import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  public async getAllStudents() {
    return await this.studentsService.getAllStudents();
  }

  @Get(':id')
  public getStudent() {
    return {};
  }

  @Post()
  public addStudent() {
    return {};
  }

  @Put(':id')
  public updateStudent() {
    return {};
  }

  @Delete(':id')
  public deleteStudent() {
    return {};
  }

  @Post(':id/attendance')
  public addAttendanceRecord() {
    return {};
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
