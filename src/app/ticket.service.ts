import { Ticket } from './Models/Ticket';
import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {

  constructor(private http: Http) { }
  ticket: Ticket;
  url = '192.168.0.32:8080/api/tickets';
  GetTickets(id: number) {
   return this.http.get('http://192.168.0.32:8080/api/tickets' + id ).map(response => response.json());
  }

  GetAll() {
    return this.http.get('http://192.168.0.32:8080/api/tickets').map(response => response.json());
  }

  PostTicket(ticket: Ticket) {
    return this.http.post('hhttp://192.168.0.32:8080/api/tickets', ticket).map(response => response.json());
  }


}
