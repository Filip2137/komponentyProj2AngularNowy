//export interface Movie{
//  id: number,
//  title: string,
//  duration: number,
//  image: string,
//  description: string
//}

import { defaultRippleAnimationConfig } from "@angular/material/core";

export class Movie {

  private _id

  constructor(private _title: string, private _duration: number, private _image: string, private _desc: string, _id?: number) {
    if(_id)
      this._id = _id;
    else
      this._id=0

  };

  get id(): number {
    return this._id;
  };
  get title(): string {
    return this._title;
  };
  get duration(): number {
    return this._duration;
  };
  get image(): string {
    return this._image;
  };
  get description(): string {
    return this._desc;
  };

  set id(id: number) {
    this._id = id;
  };
  set title(title: string) {
    this._title = title;
  };
  set duration(duration: number) {
    this._duration = duration;
  };
  set image(image: string) {
    this._image = image;
  };
  set description(description: string) {
    this._desc = description;
  };
};
