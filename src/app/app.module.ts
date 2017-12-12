import { HttpModule } from '@angular/http';
import { TicketService } from './ticket.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { AppRoutingModule } from './/app-routing.module';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketDetailComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
