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
    );
  }
  public postMovie() : Observable<Room[]>{
    return this.http.get<Room[]>(
      `${this.URL}/Movie`
    );
  }
}
