import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Movie } from 'src/models/Movie';
@Component({
  selector: 'app-movieIndex',
  templateUrl: './movieIndex.component.html',
  styleUrls: ['./movieIndex.component.css']
})
export class MovieIndexComponent implements OnInit {

  movie !: Movie
  constructor(private router : ActivatedRoute){
    let state = history.state
    console.log(history.state)
    if(state.title)
      this.movie = new Movie(state.title, state.duration, state.image, state.description, state.id)
   }

  ngOnInit() {
  }

}
