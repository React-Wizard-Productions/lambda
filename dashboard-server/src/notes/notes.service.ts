import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notes } from './entities/notes.entity';
import { Students } from 'src/students/entities/students.entity';
import { Repository } from 'typeorm';
import { NotesDTO } from './notes.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes) private notesRepository: Repository<Notes>,
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  public async addNote(studentId: string, dto: NotesDTO): Promise<NotesDTO> {
    const student = await this.studentsRepository.findOneOrFail({
      id: studentId,
    });
    const newDto = { ...dto, student };
    return await this.notesRepository
      .save(newDto)
      .then(entity => NotesDTO.fromEntity(entity));
  }
}
