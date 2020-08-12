import { Module } from '@nestjs/common';
import { TeamleadController } from './teamlead.controller';
import { TeamleadService } from './teamlead.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamLead } from './entities/teamlead.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamLead])],
  controllers: [TeamleadController],
  providers: [TeamleadService],
})
export class TeamleadModule {}
