import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { WorkshopDetailsComponent } from './pages/workshop/workshop-details/workshop-details.component';
import { WorkshopAttendeesComponent } from './pages/workshop/workshop-attendees/workshop-attendees.component';
import { WorkshopAttendeeComponent } from './pages/workshop/workshop-attendees/workshop-attendee/workshop-attendee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    WorkshopDetailsComponent,
    WorkshopAttendeeComponent,
    WorkshopAttendeesComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
