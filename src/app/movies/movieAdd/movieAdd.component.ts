import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-movieAdd',
  templateUrl: './movieAdd.component.html',
  styleUrls: ['./movieAdd.component.css']
})
export class MovieAddComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private formbuilder: FormBuilder){}

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      title: [''],
      duration: [''],
      image:[''],
      description:['']
    })
  }

}
