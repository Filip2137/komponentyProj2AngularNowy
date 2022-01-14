import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Seance } from 'src/models/Seance';
import { Ticket } from 'src/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

constructor() { }


  prepareTicketData(userData : FormGroup, seatNumbers: number[], seance: Seance ) : Ticket[]{
    let tickets : Ticket[] =[]
    for(let seat of seatNumbers){
      tickets.push(new Ticket(seance.id, seat+1, userData.value.email, userData.value.fullName))
    }
    console.log(tickets)
    return tickets
  }
}
