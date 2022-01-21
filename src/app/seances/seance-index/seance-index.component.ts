import { Component, OnInit, SimpleChange } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieEditComponent } from 'src/app/movies/movie-edit-add/movie-edit.component';
import { Movie } from 'src/models/Movie';
import { Room } from 'src/models/Room';
import { Seance } from 'src/models/Seance';
import { Ticket } from 'src/models/Ticket';
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
  room !: Room
  takenTickets !: Ticket[]
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
      )
      this.fetchRoom()
      this.fetchTickets()
    }
    )

   }

  ngOnInit(): void {
  }


  buyTickets(){
    const dialogRef=this.dialog.open(TicketRoomComponent, {
      data: {
        tickets: this.takenTickets,
        room: this.room,
        seance: this.seance
      },
    });
    dialogRef.afterClosed().subscribe(response => {
      if(!response)
        return
      console.log(response)
      for(let ticket of response.data){
        this._databaseService.postTicket(<Ticket>ticket).subscribe()
      }
      this.seance.amountOf_available_tickets-=response.data.length
      this.seance.amountOf_sold_tickets+=response.data.length
      this._databaseService.putSeance(this.seance).subscribe((response)=>{
        this.seance=response
       this.fetchTickets()

      })
    })
  }
  fetchRoom()
  {
    this._databaseService.getRoomById(this.seance.roomID).subscribe(
      (response)=>{{this.room=response
      console.log(this.room)}}
    )
  }
  fetchTickets(){
    this._databaseService.getTickets().subscribe(
      (response)=>{ this.takenTickets=[]
        this.takenTickets.push(...response.filter(p=>p.seanceID===this.seance.id))
      console.log(response)
      }
    )
  }
}
