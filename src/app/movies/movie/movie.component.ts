import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() movie!: Movie
}
