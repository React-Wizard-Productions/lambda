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

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

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
