import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'' , redirectTo: 'movies/all', pathMatch:'full'},
  {path: 'movies/:genre', component: MoviesComponent},
  {path: 'movies-detail/:id' , component: MoviesDetailComponent},
  {path: '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoviesComponent,MoviesDetailComponent]