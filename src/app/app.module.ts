import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobSearchComponent } from './job-search/job-search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ContactComponent } from './contact/contact.component';
import { ProgessComponent } from './progess/progess.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResearchComponent } from './research/research.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {FullCalendarModule} from '@fullcalendar/angular';




@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    CalendarComponent,
    ProfileComponent,
    InvoicesComponent,
    ContactComponent,
    ProgessComponent,
    SidebarComponent,
    ResearchComponent,
    

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
