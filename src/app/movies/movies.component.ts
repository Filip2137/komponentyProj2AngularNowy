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
      data: movie,
    });
    dialogRef.afterClosed().subscribe(response => {
      if(!response.data)
        return
      this._databaseService.putMovie(response.data).subscribe()
      let index = this.movies.findIndex(p=>p.id==response.data.id)
      this.movies[index]=<Movie>response.data
    })
  }
  deleteMovie(movieId: number){
    this._databaseService.deleteMovie(movieId).subscribe((response)=>
      {
        const index = this.movies.findIndex(p=>p.id==movieId)
        this.movies.splice(index,1)
      }
    )
  }

  addMovie(){
    const dialogRef=this.dialog.open(MovieEditComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe(response => {
      if(!response)
        return
      this._databaseService.postMovie(response.data).subscribe((response)=>this.movies.push(<Movie>response))
    })
  }
}
