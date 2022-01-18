import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Movie } from 'src/models/Movie';
import { Seance } from 'src/models/Seance';
import { Ticket } from 'src/models/Ticket';
import { DatabaseServiceService } from 'src/services/database-service.service';

interface dataSetNode{
  date: string,
  tickets: number
}

@Component({
  selector: 'app-movieIndex',
  templateUrl: './movieIndex.component.html',
  styleUrls: ['./movieIndex.component.css']
})


export class MovieIndexComponent implements OnInit {

  movie !: Movie
  index !: number

  seances: Seance[] = [];
  tickets: Ticket[] = [];
  dataSet !: Map<string, number>
  data : any = [{name: "BoughtTicketsThroughTime", series: []}]
  getDataSet() {
    // seances for current film
    this._databaseService.getSeances().subscribe(
      (response) =>
      {
        this.seances.push(...response.filter(s => s.movieID === this.index))

        // all tickets
        this._databaseService.getTickets().subscribe(
          (response1) => {
            this.tickets.push(...response1)

            // count tickets for each seance
            const seanceTicketMap = new Map();
            this.seances.forEach(s => {
              var ticketCount = 0;
              this.tickets.forEach(t => {
                if(t.seanceID == s.id) ticketCount++;
              });
              seanceTicketMap.set(s.id, [ticketCount, s.date]);
            });

          console.log(seanceTicketMap);

          // sum sold tickets for each movie each day
          var movieTicketSumByDay = new Map();
          seanceTicketMap.forEach((val, key) => {
            // val => amount of tickets, seance date
            // key => seance id

            // setting up map for each existing day
            this.seances.forEach(seance => {
            if(movieTicketSumByDay.get(seance.date) === undefined) {
              movieTicketSumByDay.set(seance.date, 0);
            };
          });

          var localdate = val[1]; // date
          movieTicketSumByDay.set(localdate, movieTicketSumByDay.get(localdate) + val[0]);

          this.dataSet = movieTicketSumByDay;

          });
          for(let x of this.dataSet){
            this.data[0].series.push({ value: x[1], name: x[0]})
          }
          this.data[0].series=this.data[0].series.reverse()
          this.data = JSON.parse(JSON.stringify(this.data).replace(/^\{(.*)\}$/,"[ { $1 }]"))
          console.log(this.data)
        }
      );
    });


  }


  constructor(private router : ActivatedRoute, private _databaseService : DatabaseServiceService) {
    let state = history.state;
    console.log(history.state);

    let index = router.snapshot.paramMap.get('movieId')

    if(index)
      this.index = Number.parseInt(index);
    if(state.title)
    {
      this.movie = new Movie(state.title, state.duration, state.image, state.description, state.id)
      this.getDataSet();
      return
    }

    this._databaseService.getMovieById(this.index).subscribe(
      (response)=> { this.movie = response; this.getDataSet();}
    )
   }
  ngOnInit() {
  }

}
