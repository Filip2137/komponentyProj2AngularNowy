import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Movie } from 'src/models/Movie';
import { DatabaseServiceService } from 'src/services/database-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []

  constructor(private _databaseService : DatabaseServiceService, private router: Router) {
    this.fetchMovies()
   }

  ngOnInit(): void {
  }

  fetchMovies(){
    this._databaseService.getMovies().subscribe(
      (response) => {{
        this.movies=response
      }}
    )
  }
  goToMovie(movie: Movie){
    this.router.navigateByUrl(`/movies/${movie.id}`, { state: movie });
  }
}
