//export interface Seance {
 // id: number;
 // date: string;
 // hour: string;
 // roomID: number;
 // movieID: number;
 // amountOf_sold_tickets: number;
 // amountOf_available_tickets: number;
//}

export class Seance {
  private _id: number
  private _date: string
  private _hour: string
  private _roomID: number
  private _movieID: number
  private _amountOf_sold_tickets: number
  private _amountOf_available_tickets: number

  constructor(id: number, date: string, hour: string, roomID: number, movieID: number, aost: number, aoat: number) {
    this._id = id;
    this._date = date;
    this._hour = hour;
    this._roomID = roomID;
    this._movieID = movieID;
    this._amountOf_sold_tickets = aost;
    this._amountOf_available_tickets = aoat;
  };

  get id(): number {
    return this._id;
  };
  get date(): string {
    return this._date;
  };
  get hour(): string {
    return this._hour;
  };
  get roomID(): number {
    return this._roomID;
  };
  get movieID(): number {
    return this._movieID;
  };
  get amountOf_sold_tickets(): number {
    return this._amountOf_sold_tickets;
  };
  get amountOf_available_tickets(): number {
    return this._amountOf_available_tickets;
  };

  set id(id: number) {
    this._id = id;
  };
  set date(date: string) {
    this._date = date;
  };
  set hour(hour: string) {
    this._hour = hour;
  };
  set roomID(roomID: number) {
    this._roomID = roomID;
  };
  set movieID(movieID: number) {
    this._movieID = movieID;
  };
  set amountOf_sold_tickets(amountOf_sold_tickets: number) {
    this._amountOf_sold_tickets = amountOf_sold_tickets;
  };
  set amountOf_available_tickets(amountOf_available_tickets: number) {
    this._amountOf_available_tickets = amountOf_available_tickets;
  };
};