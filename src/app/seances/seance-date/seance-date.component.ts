import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';
import { Seance } from 'src/models/Seance';
import { DatabaseServiceService } from 'src/services/database-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Room } from 'src/models/Room';
@Component({
  selector: 'app-seance-date',
  templateUrl: './seance-date.component.html',
  styleUrls: ['./seance-date.component.css']
})
export class SeanceDateComponent implements OnInit {

  seances: Seance[]=[]
  unfilteredSeances: Seance[] = []
  movies: Movie[]=[]
  rooms: Room[]=[]
  //date: any
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
    console.log("HABABAVA");
  }
  OnSeanceClick(seance:Seance)
  {
    //ToDo
  }
  fetchSeances()
  {
    this._databaseService.getSeances().subscribe(
      (response)=>{this.seances=response.sort(this.compare)
      this.unfilteredSeances=this.seances}
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
  goToSeance(seance: Seance){
    this.router.navigateByUrl(`/seances/${seance.id}`,{state: {seance, movie: this.findMovie(seance)}});
  }
  Search(date: string)
  {
      this.seances=this.unfilteredSeances.filter(res=>{
        return res.date.toLocaleLowerCase().match(date.toLocaleLowerCase());
      })
    
  }

  compare(seance1: Seance, seance2: Seance): number{
    let num1:number =(Number.parseInt(seance1.date.replace('-','')+seance1.hour.replace(':','')))
    let num2:number =(Number.parseInt(seance2.date.replace('-','')+seance2.hour.replace(':','')))
    if(num1>num2)
    return 1
    else if(num1===num2)
      return 0
    else
    return -1
    
  }
  

}
