import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
  public dialogRef: MatDialogRef<SeanceEditAddComponent>) {
    if(data.seance)
      this.editForm=this._fb.group(
        {
          date: [data.seance.date],
          hour: [data.seance.hour],
          roomID:[data.seance.roomID],
          movieID:[data.seance.movieID],
          amountOf_sold_tickets:[data.seance.amountOf_sold_tickets],
          amountOf_available_tickets:[data.seance.amountOf_available_tickets]
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
    if(this.data.seance)
    {
      this.data.seance.date=this.editForm.value.date
      this.data.seance.hour=this.editForm.value.hour
      this.data.seance.roomID=this.editForm.value.roomID
      this.data.seance.movieID=this.editForm.value.movieID
      this.data.seance.amountOf_sold_tickets=this.editForm.value.amountOf_sold_tickets
      this.data.seance.amountOf_available_tickets=this.editForm.value.amountOf_available_tickets
      this.data.edited=true
    }
    else
      this.data.seance=new Seance(this.editForm.value.date,this.editForm.value.hour,this.editForm.value.roomID,this.editForm.value.movieID,this.editForm.value.amountOf_sold_tickets,this.editForm.value.amountOf_available_tickets)
    this.dialogRef.close({data:this.data})
  }

}
