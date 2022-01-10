//export interface Movie{
//  id: number,
//  title: string,
//  duration: number,
//  image: string,
//  description: string
//}

export class Movie {
  private _id: number
  private _title: string
  private _duration: number
  private _image: string
  private _description: string

  constructor(id: number, title: string, duration: number, image: string, desc: string) {
    this._id = id;
    this._title = title;
    this._duration = duration;
    this._image = image;
    this._description = desc;
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
    return this._description;
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
    this._description = description;
  };
};
