import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { ProgessComponent } from './progess/progess.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
  {path:'apply',component:JobSearchComponent},
  {path:'home',component:CalendarComponent},
  {path:'profile',component:ProfileComponent},
  {path:'invoice', component:InvoicesComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'estimates',component:InvoicesComponent},
  {path:'team-member',component:ContactComponent},
  {path:'progress', component:ProgessComponent},
  {path:'research', component:ResearchComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
