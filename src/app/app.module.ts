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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    SeancesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient, DatabaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
