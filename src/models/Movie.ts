//export interface Movie{
//  id: number,
//  title: string,
//  duration: number,
//  image: string,
//  description: string
//}

export class Movie {
  private id: number
  private title: string
  private duration: number
  private image: string
  private description: string

  constructor(title: string, duration: number, image: string, desc: string, id?: number) {
    if(id)
      this.id = id;
    else
      this.id=0
    this.title = title;
    this.duration = duration;
    this.image = image;
    this.description = desc;
  };

  get Id(): number {
    return this.id;
  };
  get Title(): string {
    return this.title;
  };
  get Duration(): number {
    return this.duration;
  };
  get Image(): string {
    return this.image;
  };
  get Description(): string {
    return this.description;
  };

  set Id(id: number) {
    this.id = id;
  };
  set Title(title: string) {
    this.title = title;
  };
  set Duration(duration: number) {
    this.duration = duration;
  };
  set Image(image: string) {
    this.image = image;
  };
  set Description(description: string) {
    this.description = description;
  };
};
