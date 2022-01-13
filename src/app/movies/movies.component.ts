import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Movie } from 'src/models/Movie';
import { DatabaseServiceService } from 'src/services/database-service.service';
import { MovieEditComponent } from './movie-edit-add/movie-edit.component';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []

  constructor(private _databaseService : DatabaseServiceService, 
    private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<Component>,
    ) {

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

  editMovie(movie: Movie){
    const dialogRef=this.dialog.open(MovieEditComponent, {
      data: {
        movie
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
      this._databaseService.putMovie(data.movie)
    })
  }
  deleteMovie(movieId: number){
    this._databaseService.deleteMovie(movieId).subscribe(
    )
  }

  addMovie(){
    const dialogRef=this.dialog.open(MovieEditComponent, {
      data: {
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
      this._databaseService.postMovie(data.movie)
    })
  }
}
