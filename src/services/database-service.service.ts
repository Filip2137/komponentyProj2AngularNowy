import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/models/Room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

constructor(private http: HttpClient) { }

  private URL : string = "http://localhost:3000"

  public getMovies() : Observable<Room[]>{
    return this.http.get<Room[]>(
      `${this.URL}/Movie`
    )
  }
  public postMovie(movie: Movie){
    return this.http.post(`${this.URL}/Movie`,
    movie,
    )
  }
  public putMovie(movie: Movie, id: number){
    return this.http.post(`${this.URL}/Movie/${id}`,
    movie,
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
    room,
    )
  }
  public putRoom(room: Room, id: number){
    return this.http.post(`${this.URL}/Room/${id}`,
    room,
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
    seance,
    )
  }
  public putSeance(seance: Seance, id: number){
    return this.http.post(`${this.URL}/Seance/${id}`,
    seance,
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
    ticket,
    )
  }
  public putTicket(ticket: Ticket, id: number){
    return this.http.post(`${this.URL}/Ticket/${id}`,
    ticket,
    )
  }
  public deleteTicket(id: number){
    return this.http.delete(`${this.URL}/Ticket/${id}`,
    )
  }
}
