import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieEditComponent } from 'src/app/movies/movie-edit-add/movie-edit.component';
import { Movie } from 'src/models/Movie';
import { Seance } from 'src/models/Seance';
import { DatabaseServiceService } from 'src/services/database-service.service';
import { TicketRoomComponent } from '../ticket-room/ticket-room.component';

@Component({
  templateUrl: './seance-index.component.html',
  styleUrls: ['./seance-index.component.css']
})
export class SeanceIndexComponent implements OnInit {

  movie !: Movie
  seance !: Seance
  index !: number
  constructor(private router : ActivatedRoute, private _databaseService : DatabaseServiceService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<Component>){
    let state = history.state
    console.log(history.state)
    let index = router.snapshot.paramMap.get('seanceId')
    if(index)
     this.index = Number.parseInt(index);
    if(state.title)
      {this.seance = <Seance>history.state.seance
        this.movie = <Movie>history.state.movie
        return
      }
    _databaseService.getSeanceById(this.index).subscribe(
      (response)=> {this.seance = response
      _databaseService.getMovieById(this.seance.movieID).subscribe(
        (response)=> this.movie = response
      )}
    )

   }

  ngOnInit(): void {
  }

  buyTickets(){
    const dialogRef=this.dialog.open(TicketRoomComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log(response)
    })
  }
}
