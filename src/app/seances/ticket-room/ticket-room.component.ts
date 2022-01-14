import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieEditComponent } from 'src/app/movies/movie-edit-add/movie-edit.component';
import { Ticket } from 'src/models/Ticket';

@Component({
  selector: 'app-ticket-room',
  templateUrl: './ticket-room.component.html',
  styleUrls: ['./ticket-room.component.css']
})
export class TicketRoomComponent implements OnInit {

  constructor(private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Ticket[],
  public dialogRef: MatDialogRef<MovieEditComponent>) {
    this.userDataForm = _fb.group({
      email:["", Validators.required],
      fullName:[""], //optional fullname
    })
  }
  userDataForm: FormGroup
  rowAmount: Array<number> = Array.from(Array(6).keys())
  columnAmount: Array<number> = Array.from(Array(15).keys())

  @Input() takenOptions: Array<number> = []
  selectedOptions: Array<number> = []
  ngOnInit(): void {
  }
  isSelected(seatId: number): boolean{
    return this.selectedOptions.includes(seatId)
  }
  onOptionSelected(seatId:number){
    if(this.takenOptions.includes(seatId))
      return
    if(this.isSelected(seatId))
      {
        this.selectedOptions=this.selectedOptions.filter(p=>p!=seatId)
        return
      }
    this.selectedOptions.push(seatId)
  }

  submit(){
    this.dialogRef.close({data:this.data});
  }
}
