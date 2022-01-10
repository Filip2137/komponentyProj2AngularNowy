import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movies/movieAdd/movieAdd.component';
import { MoviesComponent } from './movies/movies.component';
import { SeancesComponent } from './seances/seances.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path: 'movies/addMovie', component: MovieAddComponent},
  {path:'seances',component:SeancesComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
