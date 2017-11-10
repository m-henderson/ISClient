import { Ticket } from './../Models/Ticket';
import { TicketService } from './../ticket.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService) { }
  tickets = [];
  selectTicket: Ticket;
  isATicketSelected: boolean = false; 

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.ticketService.GetAll().subscribe(response => this.tickets = response);
  }

  selectedTicket(ticket: Ticket) {
    this.selectTicket = ticket;
    this.isATicketSelected = true;
  }
}
