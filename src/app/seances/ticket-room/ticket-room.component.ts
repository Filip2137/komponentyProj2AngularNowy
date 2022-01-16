import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieEditComponent } from 'src/app/movies/movie-edit-add/movie-edit.component';
import { Room } from 'src/models/Room';
import { Seance } from 'src/models/Seance';
import { Ticket } from 'src/models/Ticket';
import { TicketServiceService } from 'src/services/ticketService.service';
import { isEmailAddress } from 'src/validators/isEmailAddress';
import { maxDigits } from 'src/validators/maxDigits';

@Component({
  selector: 'app-ticket-room',
  templateUrl: './ticket-room.component.html',
  styleUrls: ['./ticket-room.component.css']
})
export class TicketRoomComponent implements OnInit {

  constructor(private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: {tickets: Ticket[], seance: Seance, room: Room},
  public dialogRef: MatDialogRef<MovieEditComponent>, private ticketService: TicketServiceService) {
    this.userDataForm = _fb.group({
      email:["", [Validators.required, isEmailAddress()]],
      fullName:["", maxDigits(0)], //optional fullname
    })
    console.log(data)
    this.takenOptions=data.tickets.map(p=>p.seatNr-1)
    this.rowAmount = Array.from(Array(data.room.seats_amount/10).keys())
    this.columnAmount = Array.from(Array(10).keys())
  }
  userDataForm: FormGroup
  rowAmount: Array<number>
  columnAmount: Array<number>
  takenOptions: Array<number> = []
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
  }

  sendData(){
    let tickets: Ticket[] = this.ticketService.prepareTicketData(this.userDataForm, this.selectedOptions, this.data.seance)
    this.dialogRef.close({data: tickets});
  }


}
