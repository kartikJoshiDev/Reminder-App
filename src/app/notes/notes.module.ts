import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditNoteComponent } from './edit-note/edit-note.component';


@NgModule({
  declarations: [ NotesListComponent, AddNoteComponent, EditNoteComponent],
  imports: [
    CommonModule,
    SharedModule,
    NotesRoutingModule,
  ]
})
export class NotesModule { }
