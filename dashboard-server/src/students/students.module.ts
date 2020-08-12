import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './entities/students.entity';
import { AttendanceService } from 'src/attendance/attendance.service';
import { AttendanceModule } from 'src/attendance/attendance.module';
import { Attendance } from 'src/attendance/entities/attendance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Students, Attendance])],
  controllers: [StudentsController],
  providers: [StudentsService, AttendanceService],
})
export class StudentsModule {}
