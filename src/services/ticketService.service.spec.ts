/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TicketServiceService } from './ticketService.service';

describe('Service: TicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketServiceService]
    });
  });

  it('should ...', inject([TicketServiceService], (service: TicketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
