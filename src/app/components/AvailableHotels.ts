import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { HotelsService } from 'src/app/services/hotels.service';


@Component({
  selector: 'available-hotels',
  templateUrl: './AvailableHotels.html',
  styleUrls: ['./AvailableHotels.scss'],
  providers: [HotelsService]
})
export class AvailableHotels {

    constructor(
      private route: ActivatedRoute,
      private _hotel: HotelsService,
      private router: Router
    ) {}

    dates = {
      ini_date: '',
      fin_date: ''
    }; 

    hotels = [];

    ngOnInit() {

      this.dates = {
        ini_date: this.route.snapshot.paramMap.get("ini_date"),
        fin_date: this.route.snapshot.paramMap.get("fin_date")
      }

      //Consultamos los hoteles que tengan habitaciones disponibles
      this.searchHotels();
    }

    searchHotels() {
      this._hotel.findAllAvailableHotels(this.dates).subscribe(response => {
            console.log(response);  
            this.hotels = response;
        }, 
        error => {
            alert('Error');
        });
    }

    searchRooms(id_hotel) {
      this.router.navigate(["/available-rooms", id_hotel]);
    }


}  
