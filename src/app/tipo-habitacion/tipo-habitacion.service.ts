import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TipoHabitacion } from './tipo-habitacion';
import { Observable } from 'rxjs';

@Injectable()
export class TipoHabitacionService {

  private apiUrl: string = environment.baseUrl + "TipoHabitacion";

  constructor(private http: HttpClient) { }

  crearTipoHabitacion(tipoHabitacionData: any): Observable<any>{
    return this.http.post<TipoHabitacion>(this.apiUrl + "/save", tipoHabitacionData);
  }

  getTiposHabitaciones(): Observable<TipoHabitacion[]>{
    return this.http.get<TipoHabitacion[]>(this.apiUrl);
  }

  getTipoHabitacion(tipo: string): Observable<TipoHabitacion>{
    return this.http.get<TipoHabitacion>(this.apiUrl + "/get/" + tipo);
  }

  actualizarTipoHabitacion(tipoHabitacion: string, tipoHabitacionData: any): Observable<any>{
    return this.http.put<TipoHabitacion>(this.apiUrl + "/update/" + tipoHabitacion, tipoHabitacionData);
  }

  eliminarTipoHabitacion(tipoHabitacion: string): Observable<any>{
    return this.http.delete<TipoHabitacion>(this.apiUrl + "/delete/" + tipoHabitacion);
  }

}
