import { Component, Input, OnInit } from '@angular/core';
import { Seance } from 'src/models/Seance';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() seance!: Seance

}
