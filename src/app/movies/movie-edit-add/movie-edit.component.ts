import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/models/Movie';

@Component({
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  editForm: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
  public dialogRef: MatDialogRef<MovieEditComponent>) {
    if(data.movie)
      this.editForm = this._fb.group(
        {
          title: [data.movie.title],
          duration: [data.movie.duration],
          image: [data.movie.image],
          description: [data.movie.description]
        }
     )
     else
     this.editForm = this._fb.group(
      {
        title: [''],
        duration: [''],
        image: [''],
        description: ['']
      }
   )

  }

  ngOnInit(): void {
  }

  editMovie(): void {
    if(this.data.movie)
    {
      this.data.movie.title = this.editForm.value.title
      this.data.movie.image= this.editForm.value.image
      this.data.movie.duration = this.data.movie.duration
      this.data.movie.description = this.data.movie.description
      this.data.edited=true
    }
    else
      this.data.movie = new Movie(this.editForm.value.title, this.data.movie.duration, this.editForm.value.image, this.data.movie.description)

    this.dialogRef.close({data:this.data});
  }

}
