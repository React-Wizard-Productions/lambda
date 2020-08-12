import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './entities/students.entity';
import { AttendanceService } from 'src/attendance/attendance.service';
import { AttendanceModule } from 'src/attendance/attendance.module';
import { Attendance } from 'src/attendance/entities/attendance.entity';
import { Notes } from 'src/notes/entities/notes.entity';
import { NotesService } from 'src/notes/notes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Students, Attendance, Notes])],
  controllers: [StudentsController],
  providers: [StudentsService, AttendanceService, NotesService],
})
export class StudentsModule {}
