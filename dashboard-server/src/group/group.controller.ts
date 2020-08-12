import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDTO } from './group.dto';
import { plainToClass } from 'class-transformer';
import { StudentsService } from 'src/students/students.service';
import { TeamleadService } from 'src/teamlead/teamlead.service';

@Controller('group')
export class GroupController {
  constructor(
    private groupService: GroupService,
    private studentService: StudentsService,
    private teamLeadService: TeamleadService,
  ) {}

  @Get()
  public getAllGroups() {
    return this.groupService.getAllGroups();
  }

  @Get(':id')
  public getGroup(@Param('id') id: string) {
    return this.groupService.getGroup(id);
  }

  @Post()
  public addGroup(@Body() dto: GroupDTO) {
    const newDto = plainToClass(GroupDTO, dto);
    return this.groupService.addGroup(dto);
  }

  @Put('add/student/:id/:studentId')
  public async addStudent(
    @Param('id') id: string,
    @Param('studentId') studentId: string,
  ) {
    const student = await this.studentService.getStudent(studentId);
    const group = await this.groupService.getGroup(id);
    return this.groupService.addStudent(group, student);
  }

  @Put('add/teamlead/:id/:teamLeadId')
  public async addTeamLead(
    @Param('id') id: string,
    @Param('teamLeadId') teamLeadId: string,
  ) {
    const teamLead = await this.teamLeadService.getTeamLead(teamLeadId);
    const group = await this.groupService.getGroup(id);
    return this.groupService.addTeamLead(group, teamLead);
  }

  @Put('remove/student/:id/:studentId')
  public async removeStudent(
    @Param('id') id: string,
    @Param('studentId') studentId: string,
  ) {
    const group = await this.groupService.getGroup(id);
    return this.groupService.removeStudent(group, studentId);
  }

  @Put('remove/teamlead/:id/:teamLeadId')
  public async removeTeamLead(
    @Param('id') id: string,
    @Param('teamLeadId') teamLeadId: string,
  ) {
    const group = await this.groupService.getGroup(id);
    return this.groupService.removeTeamLead(group, teamLeadId);
  }

  @Put(':id')
  public updateGroup(@Param('id')id: string, @Body() dto: GroupDTO) {
      const newDto = plainToClass(GroupDTO, dto);
      return this.groupService.updateGroup(id, newDto);
  }

  @Delete(':id')
  public deleteGroup(@Param('id') id: string) {
      return this.groupService.deleteGroup(id)
  }
}
