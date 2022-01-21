//export interface Ticket {
//  id: number,
//  seanceID: number,
//  seatNr: number,
//  email: string,
//  fullName?: string,
//}

export class Ticket {
  private _id: number

  constructor(private _seanceID: number, private _seatNr: number, private _email: string, private _fullname?: string, id?: number) {
    if(id)
      this._id = id;
    else
      this._id = 0
  };

  get id(): number {
    return this._id;
  };
  get seanceID(): number {
    return this._seanceID;
  };
  get seatNr(): number {
    return this._seatNr;
  };
  get email(): string {
    return this._email;
  };
  get fullname(): string | undefined {
    return this._fullname;
  };


  set id(id: number) {
    this._id = id;
  };
  set seanceID(seanceID: number) {
    this._seanceID = seanceID;
  };
  set seatNr(seatNr: number) {
    this._seatNr = seatNr;
  };
  set email(email: string) {
    this._email = email;
  };
  set fullname(fullname: string | undefined) {
    this._fullname = fullname;
  };
};
