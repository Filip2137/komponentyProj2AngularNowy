import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/models/Movie';
import { isNonEmpty } from 'src/validators/IsEmpty';
import { isInRange } from 'src/validators/isInRange';

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
          title: [data.title, [Validators.required, isNonEmpty()]],
          duration: [data.duration, [Validators.required, isInRange(30, 300)]],
          image: [data.image, Validators.required],
          description: [data.description, Validators.required]
        }
     )
     else
     this.editForm = this._fb.group(
      {
        title: ['', [Validators.required, isNonEmpty()]],
        duration: ['', [Validators.required, isInRange(30, 300)]],
        image: ['', Validators.required],
        description: ['', Validators.required]
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
