export interface Ticket {
  id: number,
  seanceID: number,
  seatNr: number,
  email: string,
  fullName?: string,
}

//constructor(id: number, seanceID: number, seatNr: number, email: number, fullname?: string) fullname is optional
