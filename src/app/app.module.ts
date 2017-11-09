import { HttpModule } from '@angular/http';
import { TicketService } from './ticket.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TicketComponent
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
