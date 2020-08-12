import { Students } from 'src/students/entities/students.entity';
import { TeamLead } from 'src/teamlead/entities/teamlead.entity';
import { Group } from './entities/group.entity';

export class GroupDTO implements Readonly<GroupDTO> {
  id: string;
  name: string;
  type: string;
  students: Students[];
  teamLeads: TeamLead[];

  public static from(dto: Partial<GroupDTO>) {
    const newDto = new GroupDTO();
    newDto.id = dto.id;
    newDto.name = dto.name;
    newDto.type = dto.type;
    newDto.students = dto.students;
    newDto.teamLeads = dto.teamLeads;
    return newDto;
  }

  public static fromEntity(group: Group) {
    return this.from({
      id: group.id,
      name: group.name,
      type: group.type,
      students: group.students,
      teamLeads: group.teamLeads,
    });
  }

  public toEntity() {
    const newGroup = new Group();
    newGroup.id = this.id;
    newGroup.name = this.name;
    newGroup.type = this.type;
    return newGroup;
  }
}
