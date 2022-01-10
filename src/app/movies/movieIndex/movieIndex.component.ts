import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieIndex',
  templateUrl: './movieIndex.component.html',
  styleUrls: ['./movieIndex.component.css']
})
export class MovieIndexComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
  }

}
