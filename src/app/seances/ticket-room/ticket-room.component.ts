import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-room',
  templateUrl: './ticket-room.component.html',
  styleUrls: ['./ticket-room.component.css']
})
export class TicketRoomComponent implements OnInit {

  constructor(private _fb: FormBuilder) { 
    this.userDataForm = _fb.group({
      email:[""],
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

  }
}
