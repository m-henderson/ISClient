import { Http } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketService {

  constructor(private http: Http) { }

  GetTickets(id: number) {
   return this.http.get('http://192.168.0.32:8090/api/tickets/' + id ).map(response => response.json());
  }

  GetAll() {
    return this.http.get('http://192.168.0.32:8090/api/tickets').map(response => response.json());
  }


}
