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

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.ticketService.GetAll().subscribe(response => this.tickets = response);
  }
}
