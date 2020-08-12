import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { Students } from 'src/students/entities/students.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance, Students])],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}
