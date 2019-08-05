import { Component } from '@angular/core';

import { RoomTypesService } from 'src/app/services/roomtypes.service';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'room-types',
  templateUrl: './RoomTypes.html',
  styleUrls: ['./RoomTypes.scss'],
  providers: [RoomTypesService, HotelsService]
})
export class RoomTypes {

    constructor(
        private _room_type: RoomTypesService,
        private _hotel: HotelsService,
    ) {}


    room_type = {
        description: '',
        id_hotel: -1,
        state: true
    }

    room_types = [];
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
        this._room_type.save(this.room_type).subscribe(response => {
            alert('Registro correctamente');
            this.cancelProcess();
            this.findAll();       
        }, 
        error => {
            alert('Error');
        });
    }

    findAll(){
        this._room_type.findAll().subscribe(
            response => {
                this.room_types = response;
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

    findById(id:number) {
        this.is_update = true;

        this.id_to_update = id;

        this.show_form = true;

        this._room_type.findById(id).subscribe(
            response => {
                this.room_type = {
                     description: response.description,
                     id_hotel: response.id_hotel,
                     state: response.state
                }
            },
            error => {
                alert('Error');
            }
        );
    }

    update() {
        this._room_type.update(this.id_to_update, this.room_type).subscribe(response => {
            alert('Actualizado correctamente');
            this.cancelProcess();
            this.findAll();    
        }, 
        error => {
            alert('Error');
        });
    }

    cancelProcess() {
        this.room_type = {
             description: '',
             id_hotel: -1,
             state: true
        }

        this.is_update = false;

        this.id_to_update = -1;
        this.show_form = false;
    }
}
