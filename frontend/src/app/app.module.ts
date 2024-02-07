import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IqooComponent } from './iqoo/iqoo.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminpostComponent,
    HomeComponent,
    IqooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
