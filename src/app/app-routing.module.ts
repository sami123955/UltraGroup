import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Hotels } from './components/admin/Hotels';
import { Locations } from './components/admin/Locations';
import { RoomTypes } from './components/admin/RoomTypes';
import { Rooms } from './components/admin/Rooms';
import { IndexComponent } from './components/admin/Index';
import { Home } from './components/home';
import { AvailableHotels } from './components/AvailableHotels';
import { AvailableRooms } from './components/AvailableRooms';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'admin/hotels', component: Hotels},
      {path: 'admin/locations', component: Locations},
      {path: 'admin/room-types', component: RoomTypes},
      {path: 'admin/rooms', component: Rooms},
      {path: 'admin', component: IndexComponent},
      {path: '', component: Home},
      {path: 'available-hotels/:ini_date/:fin_date', component: AvailableHotels},
      {path: 'available-rooms/:id_hotel', component: AvailableRooms},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
