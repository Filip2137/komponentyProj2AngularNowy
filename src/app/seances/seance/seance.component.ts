import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/models/Movie';
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
  @Input() movie!: Movie
  @Output() goToSeance=new EventEmitter<Seance>()
  @Output() editSeance= new EventEmitter<Seance>()
  @Output() deleteSeance=new EventEmitter<number>()
  edit()
  {
    this.editSeance.emit(this.seance)
  }
  delete()
  {
    this.deleteSeance.emit(this.seance.id)
  }

  goToSeanceMethod()
  {
    this.goToSeance.emit(this.seance)
  }
}
