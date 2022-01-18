import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SeancesComponent } from './seances/seances.component';
import { MovieComponent } from './movies/movie/movie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseServiceService } from 'src/services/database-service.service';
import { MovieAddComponent } from './movies/movieAdd/movieAdd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeanceComponent } from './seances/seance/seance.component';
import { MovieIndexComponent } from './movies/movieIndex/movieIndex.component';
import {MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MovieEditComponent } from './movies/movie-edit-add/movie-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SeanceIndexComponent } from './seances/seance-index/seance-index.component';
import { TicketRoomComponent } from './seances/ticket-room/ticket-room.component';
import {MatChipsModule} from '@angular/material/chips';
import { SeanceEditAddComponent } from './seances/seance-edit-add/seance-edit-add.component';
import { MatStepperModule} from '@angular/material/stepper';
import { SeanceDateComponent } from './seances/seance-date/seance-date.component'
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    SeancesComponent,
    MovieComponent,
    MovieAddComponent,
    SeanceComponent,
    MovieIndexComponent,
    MovieEditComponent,
    SeanceIndexComponent,
    TicketRoomComponent,
    SeanceEditAddComponent,
    SeanceDateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatStepperModule,
    MatTableModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
  ],
  providers: [HttpClient, DatabaseServiceService, {
    provide: MatDialogRef,
    useValue: []
     } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
