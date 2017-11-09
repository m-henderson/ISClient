import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {

  constructor(private http: Http) { }

  GetTickets() {
   return this.http.get('http://localhost:52086/api/tickets').map(response => response.json());
  }


}
