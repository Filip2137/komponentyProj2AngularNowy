import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { DatabaseServiceService } from 'src/services/database-service.service';
import {Movie} from 'src/models/Movie';
@Component({
  selector: 'app-movieAdd',
  templateUrl: './movieAdd.component.html',
  styleUrls: ['./movieAdd.component.css']
})
export class MovieAddComponent implements OnInit {
  formValue!: FormGroup;
  movie: Movie=new Movie(0,'a',0,'a','a');
  constructor(private formbuilder: FormBuilder, private api:DatabaseServiceService){}

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      title: [''],
      duration: [''],
      image:[''],
      description:['']
    })
  }
  postMovie()
  {
    this.movie.title=this.formValue.value.title;
    this.movie.description=this.formValue.value.description;
    this.movie.image=this.formValue.value.image;
    this.movie.duration=this.formValue.value.duration;

    this.api.postMovie(this.movie)
    .subscribe(res=>{
      console.log(res);
      alert("Added Movie Successfully")
      this.formValue.reset();
    },
    err=>{
      alert("Mistake Oh no")
    })
  }

}
