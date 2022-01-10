import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { Seance } from 'src/models/Seance';
import { DatabaseServiceService } from 'src/services/database-service.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  seances: Seance[]=[]
  movies: Movie[]=[]
  constructor(private _databaseService: DatabaseServiceService) {
    this.fetchSeances()
    this.fetchMovies()
   }
  ngOnInit(): void {
  }
  OnSeanceClick(seance:Seance)
  {
    //ToDo
  }
  fetchSeances()
  {
    this._databaseService.getSeances().subscribe(
      (response)=>{{this.seances=response}}
    )
  }
  fetchMovies(){
    this._databaseService.getMovies().subscribe(
      (response)=>{this.movies=response}
    )
  }

  findMovie(seance: Seance): Movie{
    return this.movies.filter(p=>p.id===seance.movieID)[0]
  }

}
