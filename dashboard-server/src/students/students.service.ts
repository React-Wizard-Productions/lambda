import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Entity } from 'typeorm';
import { Students } from './entities/students.entity';
import { StudentsDTO } from './students.dto';
import { throws } from 'assert';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students) private studentRepository: Repository<Students>,
  ) {}

  public async getAllStudents(): Promise<StudentsDTO[]> {
    return await this.studentRepository
      .find({ relations: ['attendance'] })
      .then(students =>
        students.map(student => StudentsDTO.fromEntity(student)),
      );
  }

  public async getStudent(id: string): Promise<StudentsDTO> {
    return await this.studentRepository
      .findOne({ id })
      .then(student => StudentsDTO.fromEntity(student))
      .catch(() => {
        throw new HttpException(
          { message: `Student ${id} not found` },
          HttpStatus.NOT_FOUND,
        );
      });
  }

  public async create(dto: StudentsDTO): Promise<StudentsDTO> {
    return this.studentRepository
      .save(dto.toEntity())
      .then(student => StudentsDTO.fromEntity(student));
  }

  public async update(id: string, dto: StudentsDTO): Promise<StudentsDTO> {
    const student = await this.studentRepository.findOne({ id });
    return await this.studentRepository
      .save({ ...student, ...dto })
      .then(student => StudentsDTO.fromEntity(student));
  }

  public async delete(id: string): Promise<number> {
    return await this.studentRepository
      .delete({ id })
      .then(res => res.affected);
  }
}
