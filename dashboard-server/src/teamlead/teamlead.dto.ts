import { TeamLead } from './entities/teamlead.entity';

export class TeamLeadDTO implements Readonly<TeamLeadDTO> {
  id: string;
  firstName: string;
  lastName: string;
  github: string;
  weekend: string;

  public static from(dto: Partial<TeamLeadDTO>) {
    const tlDto = new TeamLeadDTO();
    tlDto.id = dto.id;
    tlDto.firstName = dto.firstName;
    tlDto.lastName = dto.lastName;
    tlDto.github = dto.github;
    tlDto.weekend = dto.weekend;
    return tlDto;
  }

  public static fromEntity(entity: TeamLead) {
    return this.from({
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      github: entity.github,
      weekend: entity.weekend,
    });
  }

  public toEntity() {
    const newTeamLead = new TeamLead();
    newTeamLead.id = this.id;
    newTeamLead.firstName = this.firstName;
    newTeamLead.lastName = this.lastName;
    newTeamLead.github = this.github;
    newTeamLead.weekend = this.weekend;
    return newTeamLead;
  }
}
