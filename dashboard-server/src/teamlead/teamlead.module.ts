import { Module } from '@nestjs/common';
import { TeamleadController } from './teamlead.controller';
import { TeamleadService } from './teamlead.service';

@Module({
  controllers: [TeamleadController],
  providers: [TeamleadService],
})
export class TeamleadModule {}
