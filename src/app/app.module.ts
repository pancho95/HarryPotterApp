import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
