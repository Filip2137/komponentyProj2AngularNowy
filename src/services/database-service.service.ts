import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/models/Room';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/models/Ticket';
import { Seance } from 'src/models/Seance';
import { Movie } from 'src/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

constructor(private http: HttpClient) { }

  private URL : string = "http://localhost:3000"

  public getMovies() : Observable<Movie[]>{
    console.log("service")
    return this.http.get<Movie[]>(
      `${this.URL}/Movie`
    )
  }
  public postMovie(movie: Movie){
    return this.http.post(`${this.URL}/Movie`,
    {title: movie.title, duration: movie.duration, image: movie.image, description: movie.description},
    )
  }
  public putMovie(movie: Movie){
    return this.http.put(`${this.URL}/Movie/${movie.id}`,
    {id: movie.id, title: movie.title, duration: movie.duration, image: movie.image, description: movie.description},
    )
  }
  public deleteMovie(id: number){
    return this.http.delete(`${this.URL}/Movie/${id}`,
    )
  }

  public getRooms() : Observable<Room[]>{
    return this.http.get<Room[]>(
      `${this.URL}/Room`
    )
  }
  public postRoom(room: Room){
    return this.http.post(`${this.URL}/Room`,
    {
    room_nr: room.room_nr,
      seats_amount: room.seats_amount},
    )
  }
  public putRoom(room: Room){
    return this.http.put(`${this.URL}/Room/${room.id}`,
    {id: room.id,
      room_nr: room.room_nr,
        seats_amount: room.seats_amount},

    )
  }
  public deleteRoom(id: number){
    return this.http.delete(`${this.URL}/Room/${id}`,
    )
  }

  public getSeances() : Observable<Seance[]>{
    return this.http.get<Seance[]>(
      `${this.URL}/Seance`
    )
  }
  public postSeance(seance: Seance){
    return this.http.post(`${this.URL}/Seance`,
    {date: seance.date, hour: seance.hour, roomID: seance.roomID, movieID: seance.movieID, amountOf_available_tickets: seance.amountOf_available_tickets, amountOf_sold_tickets: seance.amountOf_sold_tickets},
    )
  }
  public putSeance(seance: Seance){
    return this.http.post(`${this.URL}/Seance/${seance.id}`,
    {id: seance.id, date: seance.date, hour: seance.hour, roomID: seance.roomID, movieID: seance.movieID, amountOf_available_tickets: seance.amountOf_available_tickets, amountOf_sold_tickets: seance.amountOf_sold_tickets},
    )
  }
  public deleteSeance(id: number){
    return this.http.delete(`${this.URL}/Seance/${id}`,
    )
  }
  public getTickets() : Observable<Ticket[]>{
    return this.http.get<Ticket[]>(
      `${this.URL}/Ticket`
    )
  }
  public postTicket(ticket: Ticket){
    return this.http.post(`${this.URL}/Ticket`,
    {seanceID: ticket.seanceID, seatNr: ticket.seatNr, email: ticket.email, fullname: ticket.fullname},
    )
  }
  public putTicket(ticket: Ticket){
    return this.http.post(`${this.URL}/Ticket/${ticket.id}`,
    {id: ticket.id, seanceID: ticket.seanceID, seatNr: ticket.seatNr, email: ticket.email, fullname: ticket.fullname},
    )
  }
  public deleteTicket(id: number){
    return this.http.delete(`${this.URL}/Ticket/${id}`,
    )
  }
}
