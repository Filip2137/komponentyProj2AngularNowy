import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Seance } from 'src/models/Seance';
import { Room } from 'src/models/Room';
import { Movie } from 'src/models/Movie';

@Component({
  templateUrl: './seance-edit-add.component.html',
  styleUrls: ['./seance-edit-add.component.css']
})
export class SeanceEditAddComponent implements OnInit {
 editForm: FormGroup 
  constructor(@Inject(MAT_DIALOG_DATA) public data: Seance, private _fb: FormBuilder,
  public dialogRef: MatDialogRef<SeanceEditAddComponent>) {
    if(data)
      this.editForm=this._fb.group(
        {
          date: [data.date],
          hour: [data.hour],
          roomID:[data.roomID],
          movieID:[data.movieID],
          amountOf_sold_tickets:[data.amountOf_sold_tickets],
          amountOf_available_tickets:[data.amountOf_available_tickets]
        }
      )
      else
        this.editForm=this._fb.group(
          {
            date: [''],
            hour: [''],
            roomID:[''],
            movieID:[''],
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
      this.data.amountOf_available_tickets=this.editForm.value.amountOf_available_tickets
    }
    else
      this.data=new Seance(this.editForm.value.date,this.editForm.value.hour,room,movie,this.editForm.value.amountOf_sold_tickets,this.editForm.value.amountOf_available_tickets)
    this.dialogRef.close({data:this.data})
    console.log(this.data)
  }

}
