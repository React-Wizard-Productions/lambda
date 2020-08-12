import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { GroupDTO } from './group.dto';
import { StudentsDTO } from 'src/students/students.dto';
import { TeamLeadDTO } from 'src/teamlead/teamlead.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  public async getAllGroups() {
    return await this.groupRepository
      .find({ relations: ['students', 'teamLeads'] })
      .then(groups => groups.map(group => GroupDTO.fromEntity(group)));
  }

  public async getGroup(id: string) {
    return await this.groupRepository
      .findOne({
        where: { id },
        relations: ['students', 'teamLeads'],
      })
      .then(group => GroupDTO.fromEntity(group));
  }

  public async addGroup(dto: GroupDTO) {
    return await this.groupRepository
      .save(dto.toEntity())
      .then(newGroup => GroupDTO.fromEntity(newGroup));
  }

  public async addStudent(group: GroupDTO, student: StudentsDTO) {
    const newGroup = group;
    newGroup.students = [...newGroup.students, student];
    return await this.groupRepository
      .save(newGroup.toEntity())
      .then(group => GroupDTO.fromEntity(group));
  }

  public async removeStudent(group: GroupDTO, studentId: string) {
    const newGroup = group;
    newGroup.students = newGroup.students.filter(
      student => student.id !== studentId,
    );
    return await this.groupRepository
      .save(newGroup.toEntity())
      .then(group => GroupDTO.fromEntity(group));
  }

  public async addTeamLead(group: GroupDTO, teamLead: TeamLeadDTO) {
    const newGroup = group;
    newGroup.teamLeads = [...newGroup.teamLeads, teamLead];
    return await this.groupRepository
      .save(newGroup.toEntity())
      .then(group => GroupDTO.fromEntity(group));
  }

  public async removeTeamLead(group: GroupDTO, teamLeadId: string) {
    const newGroup = group;
    newGroup.teamLeads = newGroup.teamLeads.filter(
      teamLead => teamLead.id !== teamLeadId,
    );
    return await this.groupRepository
      .save(newGroup.toEntity())
      .then(group => GroupDTO.fromEntity(group));
  }

  public async updateGroup(id: string, dto: GroupDTO) {
      const group = await this.getGroup(id)
      return await this.groupRepository.save({...group, ...dto}).then(group => GroupDTO.fromEntity(group))
  }

  public async deleteGroup(id: string) {
      return await this.groupRepository.delete(id)
  }
}
