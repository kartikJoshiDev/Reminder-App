import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';



const routes: Routes = [
  {path:'',component:NotesListComponent},
  {path:'editNote',component:EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
