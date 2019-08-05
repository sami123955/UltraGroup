import { Component } from '@angular/core';

import { LocationsService } from 'src/app/services/locations.service';
import { RoomsService } from 'src/app/services/rooms.service';
import { RoomTypesService } from 'src/app/services/roomtypes.service';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'rooms',
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
  providers: [RoomsService, LocationsService, HotelsService]
})
export class Rooms {

    constructor(
        private _room: RoomsService,
        private _room_types: RoomTypesService,
        private _location: LocationsService,
        private _hotel: HotelsService,
    ) {}


    room = {
        description: '',
        id_hotel: -1,
        id_type: -1,
        id_location: -1,
        guests_number: '',
        base_price: '',
        trax_percentage: '',
        state: true
    }

    rooms = [];
    room_types = [];
    locations = [];
    hotels = [];

    is_update = false;

    //it will take value when I try to update a row
    id_to_update = -1;

    show_form = false;

    ngOnInit() {
        //Find all record
        this.findAll();
        //find all hotels for select
        this.findAllHotels();
    }

    save() {
        this._room.save(this.room).subscribe(response => {
            alert('Registro correctamente');
            this.cancelProcess();
            this.findAll();       
        }, 
        error => {
            alert('Error');
        });
    }

    findAll(){
        this._room.findAll().subscribe(
            response => {
                this.rooms = response;
                console.log(response);
            }
        );
    }

    findAllHotels() {
        this._hotel.findAll().subscribe(
            response => {
                this.hotels = response;
            },
            error => {

            }
        );
    }

    findAllTypesByIdHotel(){
      this._room_types.findAllByIdHotel(this.room.id_hotel).subscribe(
            response => {
                this.room_types = response;
            }
        );  
    }

    findAllLocationsByIdHotel(){
        this._location.findAllByIdHotel(this.room.id_hotel).subscribe(
            response => {
                this.locations = response;
            }
        ); 
    }

    changeHotel() {
        this.findAllTypesByIdHotel();
        this.findAllLocationsByIdHotel();
    }

    findById(id:number) {
        this.is_update = true;

        this.id_to_update = id;

        this.show_form = true;

        this._room.findById(id).subscribe(
            response => {
                this.room = {
                    description: response.description,
                    id_hotel: response.id_hotel,
                    id_type: response.id_type,
                    id_location: response.id_location,
                    guests_number: response.guests_number.toString(),
                    base_price: response.base_price.toString(),
                    trax_percentage: response.trax_percentage.toString(),
                    state: true
                }

                this.changeHotel();
            },
            error => {
                alert('Error');
            }
        );
    }

    update() {
        this._room.update(this.id_to_update, this.room).subscribe(response => {
            alert('Actualizado correctamente');
            this.cancelProcess();
            this.findAll();    
        }, 
        error => {
            alert('Error');
        });
    }

    cancelProcess() {
        this.room = {
            description: '',
            id_hotel: -1,
            id_type: -1,
            id_location: -1,
            guests_number: '',
            base_price: '',
            trax_percentage: '',
            state: true
        }

        this.is_update = false;

        this.id_to_update = -1;
        this.show_form = false;
    }
}
