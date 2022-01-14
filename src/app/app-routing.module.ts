import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movies/movieAdd/movieAdd.component';
import { MoviesComponent } from './movies/movies.component';
import { SeancesComponent } from './seances/seances.component';
import { SeanceAddComponent } from './seances/seance-add/seance-add.component';
import { MovieIndexComponent } from './movies/movieIndex/movieIndex.component';
import { SeanceIndexComponent } from './seances/seance-index/seance-index.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path: 'movies/addMovie', component: MovieAddComponent},
  {path: 'movies/:movieId', component: MovieIndexComponent},
  {path:'seances',component:SeancesComponent},
  {path:'seances/addSeance',component: SeanceAddComponent },
  {path: 'seances/:seanceId', component: SeanceIndexComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
