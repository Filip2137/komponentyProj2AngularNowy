import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { DatabaseServiceService } from 'src/services/database-service.service';
import {Movie} from 'src/models/Movie';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movieAdd',
  templateUrl: './movieAdd.component.html',
  styleUrls: ['./movieAdd.component.css']
})
export class MovieAddComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private formbuilder: FormBuilder, private api:DatabaseServiceService, private location: Location){
    this.formValue=this.formbuilder.group({
      title: [''],
      duration: [''],
      image:[''],
      description:['']
    })
  }

  ngOnInit(): void {

  }
  postMovie()
  {
    let movie: Movie = new Movie(this.formValue.value.title, this.formValue.value.duration,
      this.formValue.value.image, this.formValue.value.description)
    console.log(movie)
    this.api.postMovie(movie)
    .subscribe(res=>{
      console.log(res);
      alert("Added Movie Successfully")
      this.formValue.reset();
    },
    err=>{
      alert("Mistake Oh no")
    })
    console.log(movie)
    this.location.back();
  }
}
