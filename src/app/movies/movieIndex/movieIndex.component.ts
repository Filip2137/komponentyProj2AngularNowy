import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Movie } from 'src/models/Movie';
import { DatabaseServiceService } from 'src/services/database-service.service';
@Component({
  selector: 'app-movieIndex',
  templateUrl: './movieIndex.component.html',
  styleUrls: ['./movieIndex.component.css']
})
export class MovieIndexComponent implements OnInit {

  movie !: Movie
  index !: number
  constructor(private router : ActivatedRoute, private _databaseService : DatabaseServiceService){
    let state = history.state
    console.log(history.state)
    let index = router.snapshot.paramMap.get('movieId')
    if(index)
     this.index = Number.parseInt(index);
    if(state.title)
      {this.movie = new Movie(state.title, state.duration, state.image, state.description, state.id)
      return}
    _databaseService.getMovieById(this.index).subscribe(
      (response)=> this.movie = response
    )
   }


  ngOnInit() {
  }

}
