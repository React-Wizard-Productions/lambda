import { Controller, Put, Param, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDTO } from './notes.dto';
import { plainToClass } from 'class-transformer';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Put(':id')
  public updateNote(
    @Param('id') id: string,
    @Body() dto: NotesDTO,
  ): Promise<NotesDTO> {
    const newNote = plainToClass(NotesDTO, dto);
    return this.notesService.updateNote(id, newNote);
  }
}
