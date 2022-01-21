import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Seance } from 'src/models/Seance';
import { Room } from 'src/models/Room';
import { Movie } from 'src/models/Movie';
import { isDateBehind } from 'src/validators/isDateBehind';
import { DatabaseServiceService } from 'src/services/database-service.service';

@Component({
  templateUrl: './seance-edit-add.component.html',
  styleUrls: ['./seance-edit-add.component.css']
})
export class SeanceEditAddComponent implements OnInit {
 editForm: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: Seance, private _fb: FormBuilder, private dbService: DatabaseServiceService,
  public dialogRef: MatDialogRef<SeanceEditAddComponent>) {
    
    if(data) {
      this.editForm=this._fb.group(
        {
          date: [data.date, [Validators.required, isDateBehind()]],
          hour: [data.hour, Validators.required],
          roomID:[data.roomID, Validators.required],
          movieID:[data.movieID, Validators.required],
          amountOf_sold_tickets:[data.amountOf_sold_tickets],
          amountOf_available_tickets:[data.amountOf_available_tickets]
        }
      ); }
      else
        this.editForm=this._fb.group(
          {
            date: ['', [Validators.required, isDateBehind()]],
            hour: ['', Validators.required],
            roomID:['', Validators.required],
            movieID:['', Validators.required],
            amountOf_sold_tickets:[0],
            amountOf_available_tickets:[90]
          }
        )

   }

  ngOnInit(): void {
  }
  editSeance():void
  {
    var pom=this.editForm.value.movieID;
    var movie: number=+pom;
    pom=this.editForm.value.roomID
    var room:number=+pom
    console.log(this.data)
    if(this.data)
    {
      this.data.date=this.editForm.value.date
      this.data.hour=this.editForm.value.hour
      this.data.roomID=room
      this.data.movieID=movie
      this.data.amountOf_sold_tickets=this.editForm.value.amountOf_sold_tickets
      this.data.amountOf_available_tickets=this.editForm.value.amountOf_sold_tickets

      if(this.data.amountOf_sold_tickets===0)
      this.dbService.getRoomById(room).subscribe((response)=>{

      this.data.amountOf_available_tickets=response.seats_amount
      this.dialogRef.close({data:this.data})
        return
      })
    }
    else
      this.dbService.getRoomById(room).subscribe((response)=>{
      this.data=new Seance(this.editForm.value.date,this.editForm.value.hour,room,movie,this.editForm.value.amountOf_sold_tickets,response.seats_amount)
      this.dialogRef.close({data:this.data})
        return
      })
      this.dialogRef.close({data:this.data})

    console.log(this.data)
  }

}
