import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TeamleadService } from './teamlead.service';
import { TeamLeadDTO } from './teamlead.dto';
import { plainToClass } from 'class-transformer';

@Controller('teamlead')
export class TeamleadController {
  constructor(private teamLeadService: TeamleadService) {}

  @Get()
  public getAllTeamLeads() {
    return this.teamLeadService.getAllTeamLeads();
  }

  @Get(':id')
  public getTeamLead(@Param('id') id: string) {
    return this.teamLeadService.getTeamLead(id);
  }

  @Post()
  public addTeamLead(@Body() dto: TeamLeadDTO) {
    const newDto = plainToClass(TeamLeadDTO, dto);
    return this.teamLeadService.addTeamLead(newDto);
  }

  @Put(':id')
  public updateTeamLead(@Param('id') id: string, @Body() dto: TeamLeadDTO) {
    const updateDto = plainToClass(TeamLeadDTO, dto);
    return this.teamLeadService.updateTeamLead(id, updateDto);
  }

  @Delete(':id')
  public deleteTeamLead(@Param('id') id: string) {
    return this.teamLeadService.deleteTeamLead(id);
  }
}
