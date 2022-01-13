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
    this.editForm = this._fb.group(
      {
        title: [data.movie.title],
        duration: [data.movie.duration],
        image: [data.movie.image],
        description: [data.movie.description]
      }

    )
  }

  ngOnInit(): void {
  }

  editMovie(): void {
    this.data.movie.title = this.editForm.value.title
    console.log(this.data)
    console.log(this.editForm.value)
    this.dialogRef.close({data:this.data});
  }

}
