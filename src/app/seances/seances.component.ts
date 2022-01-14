import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { Seance } from 'src/models/Seance';
import { DatabaseServiceService } from 'src/services/database-service.service';
import { SeanceEditAddComponent } from './seance-edit-add/seance-edit-add.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Room } from 'src/models/Room';
@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  seances: Seance[]=[]
  movies: Movie[]=[]
  rooms: Room[]=[]
  constructor(private _databaseService: DatabaseServiceService,
    private router: Router,
    private dialog: MatDialog,
    public dialogRef:MatDialogRef<Component>,)
     {
    this.fetchSeances()
    this.fetchMovies()
    //this.fetchRooms()
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
  fetchRooms()
  {
    this._databaseService.getRooms().subscribe(
      (response)=>{{this.rooms=response}}
    )
  }

  findMovie(seance: Seance): Movie{
    return this.movies.filter(p=>p.id===seance.movieID)[0]
  }
  goToSeance(seance: Seance){
    this.router.navigateByUrl(`/seances/${seance.id}`,{state: {seance, movie: this.findMovie(seance)}});
  }
  editSeance(seance:Seance)
  {
    const dialogRef=this.dialog.open(SeanceEditAddComponent,
      {
        data:{
          seance
        },
      });
      dialogRef.afterClosed().subscribe(data=>{
        console.log(data)
        this._databaseService.putSeance(data.seance)
      })
  }
  deleteSeance(seanceId: number)
  {
    this._databaseService.deleteSeance(seanceId).subscribe()
  }
  addSeance()
  {
    const dialogRef=this.dialog.open(SeanceEditAddComponent,
      {
        data:{},
      });
      dialogRef.afterClosed().subscribe(data=>{
        console.log(data)
        this._databaseService.putSeance(data.seance)
      })
  }

}
