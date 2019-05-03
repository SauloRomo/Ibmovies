import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TitleComponent } from './components/title/title.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'' , redirectTo: 'movies/all', pathMatch:'full'},
  {path: 'movies/:genre', component: MoviesComponent},
  {path: 'title/:id' , component: TitleComponent},
  {path: '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoviesComponent,TitleComponent]