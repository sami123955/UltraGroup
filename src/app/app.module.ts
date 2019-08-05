import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { Hotels } from './components/admin/Hotels';
import { Locations } from './components/admin/Locations';
import { RoomTypes } from './components/admin/RoomTypes';
import { Rooms } from './components/admin/Rooms';
import { IndexComponent } from './components/admin/Index';
import { Home } from './components/home';
import { AvailableHotels } from './components/AvailableHotels';

import { HttpClientModule } from "@angular/common/http";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AvailableRooms } from './components/AvailableRooms';

@NgModule({
  declarations: [
    AppComponent,
    Hotels,
    Locations,
    RoomTypes,
    Rooms,
    IndexComponent,
    Home,
    AvailableHotels,
    AvailableRooms
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
