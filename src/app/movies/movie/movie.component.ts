import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.movie.id)
  }
  @Input() movie!: Movie
  @Output() goToMovie = new EventEmitter<Movie>()
  @Output() editMovie = new EventEmitter<Movie>()
  edit(){
    this.editMovie.emit(this.movie)
  }
  delete(){

  }
}
