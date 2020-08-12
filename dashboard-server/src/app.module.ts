import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/configService';
import { StudentsModule } from './students/students.module';
import { AttendanceModule } from './attendance/attendance.module';
import { NotesModule } from './notes/notes.module';
import { TeamleadModule } from './teamlead/teamlead.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    StudentsModule,
    AttendanceModule,
    NotesModule,
    TeamleadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
