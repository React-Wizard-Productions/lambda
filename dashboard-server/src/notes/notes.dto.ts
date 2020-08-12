import { Students } from 'src/students/entities/students.entity';
import { Notes } from './entities/notes.entity';

export class NotesDTO implements Readonly<NotesDTO> {
  id: string;
  student: Students;
  notes: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;

  public static from(dto: Partial<NotesDTO>) {
    const notes = new NotesDTO();
    notes.id = dto.id;
    notes.notes = dto.notes;
    notes.isArchived = dto.isArchived;
    notes.createdAt = dto.createdAt;
    notes.updatedAt = dto.updatedAt;
    return notes;
  }

  public static fromEntity(entity: Notes) {
    return this.from({
      id: entity.id,
      notes: entity.notes,
      isArchived: entity.isArchived,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  public toEntity(student: Students) {
    const newNote = new Notes();
    newNote.id = this.id;
    newNote.student = student;
    newNote.notes = this.notes;
    newNote.isArchived = this.isArchived;
    newNote.createdAt = this.createdAt;
    newNote.updatedAt = new Date();
    return newNote;
  }
}
