import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './Home.html',
  styleUrls: ['./Home.scss'],
  providers: []
})
export class Home {

    constructor(private router: Router) {}

    dates = {
      ini_date: '',
      fin_date: ''
    }; 

    searchHotels() {
      if(this.dates.ini_date == '' || this.dates.fin_date == ''){
        alert('Debe seleccionar ambas fechas');
        return;
      }

      this.router.navigate(["/available-hotels", this.dates.ini_date, this.dates.fin_date]);
    }

    onDateIniSelect(event){
      this.dates.ini_date = this.getDate(event);
    }

    onDateFinSelect(event){
      this.dates.fin_date = this.getDate(event);
    }

    getDate(date) {
      let date_formatted = '';

      let year = date.year;
      let month = date.month < 10 ? '0'+date.month : date.month;
      let day = date.day < 10 ? '0'+date.day : date.day;

      date_formatted = year+'-'+month+'-'+day;

      return date_formatted;
    }

}  
