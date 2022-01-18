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
      (response)=>{{this.seances=response; this.unfiltredSeances=response; console.log(this.unfiltredSeances);
      this.seances=this.seances.sort(this.compare)
      }}
    )
  }
  compare(seance1: Seance, seance2: Seance): number{
    console.log(seance1.date, seance2.date,  +(Number.parseInt(seance1.date.replace('-',''))<= Number.parseInt(seance2.date.replace('-',''))))
    let num1:number =+(Number.parseInt(seance1.date.replace('-','')+(seance1.hour.replace(':',''))))
    let num2:number =+(Number.parseInt(seance2.date.replace('-','')+(seance2.hour.replace(':',''))))
    if(num1>num2)
    return 1
    else if(num1==num2)
      return 0
    else
    return -1
    
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
        var [year, month, day] = seance.date.split('-');
        let hour = seance.hour
        if(hour.length<=4)
          hour="0"+hour
        let x = hour.split(':')
        var sd = new Date(+year,+month,+day, +x[0], +x[1]);
        var curr = new Date();
        console.log(sd)
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
      dialogRef.afterClosed().subscribe((response)=>{
        if(!response)
        return
        this._databaseService.putSeance(<Seance>response.data).subscribe((response)=> console.log(response))
        let index=this.seances.findIndex(p=>p.id==response.data.id)
        this.seances[index]=<Seance>response.data
      })
  }
  deleteSeance(seanceId: number)
  {
    this._databaseService.deleteSeance(seanceId).subscribe(
      (response) => this.seances=this.seances.filter(p=>p.id!=seanceId),
      (error) => console.log(error)
    )

  }
  addSeance()
  {
    const dialogRef=this.dialog.open(SeanceEditAddComponent,
      {
        data:null,
      });
      dialogRef.afterClosed().subscribe((data)=>{
        if(!data)
        return
        this._databaseService.postSeance(<Seance>data.data).subscribe((response)=> this.seances.push(response))
      })
  }

}
