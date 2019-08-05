import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = "http://localhost:49340";

  save(room){
    //before send data, let convert to number
    room.guests_number = +room.guests_number;
    room.pricebase_price = +room.base_price;
    room.trax_percentage = +room.trax_percentage;

    return this._http.post(this.api_url+'/api/rooms', room);
  }

  findAll():any{
    return this._http.get(this.api_url+'/api/rooms');
  }

  findAllByIdHotel(id_hotel):any {
    return this._http.get(this.api_url+'/api/rooms?id_hotel='+id_hotel);
    
  }

  findById(id):any{
    return this._http.get(this.api_url+'/api/rooms/'+id);
  }

  update(id, room:any){
    //before send data, let convert to number
    room.guests_number = +room.guests_number;
    room.pricebase_price = +room.base_price;
    room.trax_percentage = +room.trax_percentage;
    
    room.id = id;
    return this._http.put(this.api_url+'/api/rooms/'+id, room);    
  }
}
