import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './entities/students.entity';
import { StudentsDTO } from './students.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students) private studentRepository: Repository<Students>,
  ) {}

  public async getAllStudents(): Promise<StudentsDTO[]> {
    return await this.studentRepository
      .find()
      .then(students =>
        students.map(student => StudentsDTO.fromEntity(student)),
      );
  }
}
