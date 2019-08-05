import { Component } from '@angular/core';

import { LocationsService } from 'src/app/services/locations.service';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'locations',
  templateUrl: './Locations.html',
  styleUrls: ['./Locations.scss'],
  providers: [LocationsService, HotelsService]
})
export class Locations {

    constructor(
        private _location: LocationsService,
        private _hotel: HotelsService,
    ) {}


    location = {
        description: '',
        id_hotel: -1,
        state: true
    }

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
        this._location.save(this.location).subscribe(response => {
            alert('Registro correctamente');
            this.cancelProcess();
            this.findAll();       
        }, 
        error => {
            alert('Error');
        });
    }

    findAll(){
        this._location.findAll().subscribe(
            response => {
                this.locations = response;
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

        this._location.findById(id).subscribe(
            response => {
                this.location = {
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
        this._location.update(this.id_to_update, this.location).subscribe(response => {
            alert('Actualizado correctamente');
            this.cancelProcess();
            this.findAll();    
        }, 
        error => {
            alert('Error');
        });
    }

    cancelProcess() {
        this.location = {
             description: '',
             id_hotel: -1,
             state: true
        }

        this.is_update = false;

        this.id_to_update = -1;
        this.show_form = false;
    }
}
