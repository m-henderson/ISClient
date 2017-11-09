import { ActivatedRoute } from '@angular/router';
import { TicketService } from './../ticket.service';
import { Ticket } from '../Models/Ticket';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket: Ticket;
  
  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ticketService.GetTickets(id).subscribe(ticket => this.ticket = ticket);
  }

  goBack(): void {
    this.location.back();
  }
}
