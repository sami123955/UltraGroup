import { Component } from '@angular/core';

import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'hotels',
  templateUrl: './Hotels.html',
  styleUrls: ['./Hotels.scss'],
  providers: [HotelsService]
})
export class Hotels {

    constructor(
        private _hotel: HotelsService
    ) {}


    hotel = {
        name: '',
        description: '',
        state: true
    }

    hotels = [];

    is_update = false;

    //it will take value when I try to update a row
    id_to_update = -1;

    show_form = false;

    selected_file = null;

    ngOnInit() {
        //Find all record
        this.findAll();
    }

    save() {
        this._hotel.save(this.hotel).subscribe(response => {
            alert('Registro correctamente');
            this.cancelProcess();
            this.findAll();       
        }, 
        error => {
            alert('Error');
        });
    }

    findAll(){
        this._hotel.findAll().subscribe(
            response => {
                this.hotels = response;
            }
        );
    }

    findById(id:number) {
        this.is_update = true;

        this.id_to_update = id;

        this.show_form = true;

        this._hotel.findById(id).subscribe(
            response => {
                this.hotel = {
                     name: response.name,
                     description: response.description,
                     state: response.state
                }
            },
            error => {
                alert('Error');
            }
        );
    }

    update() {
        this._hotel.update(this.id_to_update, this.hotel).subscribe(response => {
            alert('Actualizado correctamente');
            this.cancelProcess();
            this.findAll();    
        }, 
        error => {
            alert('Error');
        });
    }

    cancelProcess() {
        this.hotel = {
             name: '',
             description: '',
             state: true
        }

        this.is_update = false;

        this.id_to_update = -1;
        this.show_form = false;
    }

    onFileSelected(event){
        this.selected_file = event.target.files[0];
    }
}   
