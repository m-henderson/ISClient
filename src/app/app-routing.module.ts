import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketComponent } from './ticket/ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'tickets', component: TicketComponent },
  { path: 'detail/:id', component: TicketDetailComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
