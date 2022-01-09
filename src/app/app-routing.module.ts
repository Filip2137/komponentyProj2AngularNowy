import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SeancesComponent } from './seances/seances.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'seances',component:SeancesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
