import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { TopChartsComponent } from './top-charts/top-charts.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    TopBarComponent,
    SideBarComponent,
    TopChartsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
