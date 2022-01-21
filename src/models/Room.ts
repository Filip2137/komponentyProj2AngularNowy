export class Room{

  constructor(private _id:number, private _room_nr:number, private _seats_amount:number){
  }

  get id():number{
    return this._id
  }
  set id(id:number){
    this._id=id
  }
  get room_nr():number{
    return this._room_nr
  }
  set room_nr(room_nr:number){
    this._room_nr=room_nr
  }
  get seats_amount():number{
    return this._seats_amount
  }
  set seats_amount(seats_amount:number){
    this._seats_amount=seats_amount
  }
}

