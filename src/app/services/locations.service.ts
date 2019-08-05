import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = "http://localhost:49340";

  save(location){
    return this._http.post(this.api_url+'/api/locations', location);
  }

  findAll():any {
    return this._http.get(this.api_url+'/api/locations');
  }

  findAllByIdHotel(id_hotel):any{
    return this._http.get(this.api_url+'/api/locations?id_hotel='+id_hotel);
  }

  findById(id):any {
    return this._http.get(this.api_url+'/api/locations/'+id);
  }

  update(id, location:any){
    location.id = id;
    return this._http.put(this.api_url+'/api/locations/'+id, location);    
  }
}
