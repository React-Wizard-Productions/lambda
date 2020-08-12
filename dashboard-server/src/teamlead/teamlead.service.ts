import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamLead } from './entities/teamlead.entity';
import { Repository } from 'typeorm';
import { TeamLeadDTO } from './teamlead.dto';

@Injectable()
export class TeamleadService {
  constructor(
    @InjectRepository(TeamLead)
    private teamLeadRepository: Repository<TeamLead>,
  ) {}

  public async getAllTeamLeads(): Promise<TeamLeadDTO[]> {
    return await this.teamLeadRepository
      .find()
      .then(teamLeads =>
        teamLeads.map(teamLead => TeamLeadDTO.fromEntity(teamLead)),
      );
  }

  public async getTeamLead(id: string): Promise<TeamLeadDTO> {
    return await this.teamLeadRepository
      .findOne({ id })
      .then(teamLead => TeamLeadDTO.fromEntity(teamLead))
      .catch(() => {
        throw new HttpException('Team Lead not found', HttpStatus.NOT_FOUND);
      });
  }

  public async addTeamLead(dto: TeamLeadDTO): Promise<TeamLeadDTO> {
    return await this.teamLeadRepository
      .save(dto.toEntity())
      .then(teamLead => TeamLeadDTO.fromEntity(teamLead));
  }

  public async updateTeamLead(
    id: string,
    dto: TeamLeadDTO,
  ): Promise<TeamLeadDTO> {
    const teamLead = await this.teamLeadRepository.findOneOrFail({ id });
    return await this.teamLeadRepository
      .save({ ...teamLead, ...dto })
      .then(teamLead => TeamLeadDTO.fromEntity(teamLead));
  }

  public async deleteTeamLead(id: string) {
      return await this.teamLeadRepository.delete({id})
  }
}
