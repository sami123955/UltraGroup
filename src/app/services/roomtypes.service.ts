import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomTypesService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = "http://localhost:49340";

  save(room_type){
    return this._http.post(this.api_url+'/api/room_types', room_type);
  }

  findAll():any{
    return this._http.get(this.api_url+'/api/room_types');
  }

  findById(id):any{
    return this._http.get(this.api_url+'/api/room_types/'+id);
  }

  findAllByIdHotel(id_hotel):any{
    return this._http.get(this.api_url+'/api/room_types?id_hotel='+id_hotel);
  }

  update(id, room_type:any){
    room_type.id = id;
    return this._http.put(this.api_url+'/api/room_types/'+id, room_type);    
  }
}
