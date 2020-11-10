import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound404Component } from './shared/components/page-not-found404/page-not-found404.component';

const routes: Routes = [
  {path: '',redirectTo:'note',pathMatch:'full'
},
  { path: 'note',loadChildren: () => import('./notes/notes.module').then(n => n.NotesModule)},
  //{ path: '**',component: PageNotFound404Component},
  //{ path: '', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
