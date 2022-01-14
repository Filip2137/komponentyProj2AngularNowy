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
  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie, private _fb: FormBuilder,
  public dialogRef: MatDialogRef<MovieEditComponent>) {
    if(data)
      this.editForm = this._fb.group(
        {
          title: [data.title],
          duration: [data.duration],
          image: [data.image],
          description: [data.description]
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
    console.log(this.data)
    if(this.data)
    {
      this.data.title = this.editForm.value.title
      this.data.image= this.editForm.value.image
      this.data.duration = this.editForm.value.duration
      this.data.description = this.editForm.value.description
    }
    else
      this.data = new Movie(this.editForm.value.title, this.editForm.value.duration, this.editForm.value.image, this.editForm.value.description)

      console.log(this.data)
    this.dialogRef.close({data:this.data});
  }

}
