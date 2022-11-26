import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphica1Component } from './graphica1/graphica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphica1Component,
    PagesComponent,
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule
   ]
})
export class PagesModule { }
