import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TipoHabitacion } from './tipo-habitacion';
import { Observable } from 'rxjs';

@Injectable()
export class TipoHabitacionService {

  private apiUrl: string = environment.baseUrl + "TipoHabitacion";

  constructor(private http: HttpClient) { }

  getTiposHabitaciones(): Observable<TipoHabitacion[]>{
    return this.http.get<TipoHabitacion[]>(this.apiUrl);
  }

}
