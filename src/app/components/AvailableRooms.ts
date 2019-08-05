import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RoomsService } from 'src/app/services/rooms.service';


@Component({
  selector: 'available-rooms',
  templateUrl: './AvailableRooms.html',
  styleUrls: ['./AvailableRooms.scss'],
  providers: [RoomsService]
})
export class AvailableRooms {

    constructor(
      private route: ActivatedRoute,
      private _room: RoomsService
    ) {}

    id_hotel = '';

    rooms = [];

    ngOnInit() {
      this.id_hotel = this.route.snapshot.paramMap.get("id_hotel"),
      this.findAllByIdHotel();
    }

    findAllByIdHotel() {
      this._room.findAllByIdHotel(this.id_hotel).subscribe(response => {
            console.log(response);  
            this.rooms = response;
        }, 
        error => {
            alert('Error');
        });
    }

}  
