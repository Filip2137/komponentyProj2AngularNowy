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
  @Input() editable: boolean = false

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
  isOld(): boolean{
    var [year, month, day] = this.seance.date.split('-');
    let hour = this.seance.hour
    if(hour.length<=4)
      hour="0"+hour
    let x = hour.split(':')
    var sd = new Date(Date.UTC(+year,+month,+day));

    var curr = new Date();
    return sd >= curr;

  }
}
