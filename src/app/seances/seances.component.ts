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
  unfiltredSeances: Seance[]=[];
  seances: Seance[]=[];
  movies: Movie[]=[];
  rooms: Room[]=[];
  shouldFilter: boolean=false;

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
      (response)=>{{this.seances=response; this.unfiltredSeances=response; console.log(this.unfiltredSeances); }}
    )
  }
  fetchMovies(){
    this._databaseService.getMovies().subscribe(
      (response)=>{this.movies=response}
    )
  }

  filterSeances() {
    this.shouldFilter = !this.shouldFilter;
    if(this.shouldFilter) {
      this.seances = this.unfiltredSeances.filter(seance => {
        var [day, month, year] = seance.date.split('.');
        var sd = new Date(year+"-"+month+"-"+day);
        var curr = new Date();
        return sd >= curr;
       }
      )
    } else {
      this.seances = this.unfiltredSeances;
    }
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
        data: seance,
      });
      dialogRef.afterClosed().subscribe(response=>{
        console.log(response.data)
        this._databaseService.putSeance(response.data)
        let index=this.seances.findIndex(p=>p.id==response.data.id)
        this.seances[index]=<Seance>response.data
      })
  }
  deleteSeance(seanceId: number)
  {
    this._databaseService.deleteSeance(seanceId).subscribe((response)=>
    {
      const index=this.seances.findIndex(p=>p.id==seanceId)
      this.seances.splice(index,1)
    })
  }
  addSeance()
  {
    const dialogRef=this.dialog.open(SeanceEditAddComponent,
      {
        data:null,
      });
      dialogRef.afterClosed().subscribe(response=>{
        this._databaseService.postSeance(response.data).subscribe((response)=>this.seances.push(<Seance>response))
      })
  }

}
