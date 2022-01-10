import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { DatabaseServiceService } from 'src/services/database-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []

  constructor(private _databaseService : DatabaseServiceService) {
    this.fetchMovies()
   }

  ngOnInit(): void {
  }

  OnMovieClick(movie: Movie){
    //TODO add redirection
    console.log(movie)
  }

  fetchMovies(){
    this._databaseService.getMovies().subscribe(
      (response) => {{
        this.movies=response
      }}
    )
  }
}
