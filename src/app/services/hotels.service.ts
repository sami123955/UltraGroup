import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hotel } from "src/app/common/Interfaces";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = "http://localhost:49340";

  save(hotel){
   /* const fd = new FormData();
    
    fd.append('image', image, image.name);*/

    hotel.image = hotel;
    return this._http.post(this.api_url+'/api/hotels', hotel);

    //console.log(fd);

    //return this._http.post(this.api_url+'/api/upload', fd);
  }

  saveImage(image, image_name){
    const fd = new FormData();
    fd.append('image', image, image_name);
    return this._http.post(this.api_url+'/api/upload', fd);
  }

  findAll():any {
    return this._http.get(this.api_url+'/api/hotels');
  }

  findById(id): any {
    return this._http.get(this.api_url+'/api/hotels/'+id);
  }

  update(id, hotel:any){
    hotel.id = id;
    return this._http.put(this.api_url+'/api/hotels/'+id, hotel);    
  }

  findAllAvailableHotels(dates):any{
    return this._http.get(this.api_url+'/api/hotels?ini_date='+dates.ini_date+'&fin_date='+dates.fin_date);
  }

}
