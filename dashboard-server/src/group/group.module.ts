import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Students } from 'src/students/entities/students.entity';
import { TeamLead } from 'src/teamlead/entities/teamlead.entity';
import { StudentsService } from 'src/students/students.service';
import { TeamleadService } from 'src/teamlead/teamlead.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group, Students, TeamLead])],
  controllers: [GroupController],
  providers: [GroupService, StudentsService, TeamleadService],
})
export class GroupModule {}
