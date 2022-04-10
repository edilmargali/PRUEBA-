import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//// grupo
import { GrupoListComponent} from './components/grupo-list/grupo-list.component';
import { GrupoDetailsComponent} from './components/grupo-details/grupo-details.component';
import { AddGrupoComponent} from './components/add-grupo/add-grupo.component';

const routes: Routes = [



/// grupo
{ path: '', redirectTo: 'grupos', pathMatch: 'full' },
{ path: 'grupos', component: GrupoListComponent },
{ path: 'grupos/:id', component: GrupoDetailsComponent },
{ path: 'addgrupos', component: AddGrupoComponent },



/*///// tutoriales
{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },

 */



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
