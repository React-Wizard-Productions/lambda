import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './entities/notes.entity';
import { Students } from 'src/students/entities/students.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notes, Students])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
