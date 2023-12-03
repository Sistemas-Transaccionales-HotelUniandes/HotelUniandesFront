import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Habitacion } from './habitacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private apiUrl: string = environment.baseUrl + 'Habitacion';

constructor(private http: HttpClient) { }

saveHabitacion(habitacion: Habitacion): Observable<string> {
  return this.http.post<string>(this.apiUrl + '/save', habitacion);
}

updateHabitacion(id: number, habitacion: Habitacion): Observable<Habitacion> {
  return this.http.put<Habitacion>(this.apiUrl + '/update/' + id, habitacion);
}

deleteHabitacion(id: number): Observable<string> {
  return this.http.delete<string>(this.apiUrl + '/delete/' + id);
}
getAllHabitaciones(): Observable<Habitacion[]> {
  console.log(this.apiUrl);
  return this.http.get<Habitacion[]>(this.apiUrl);
}

getHabitacionById(id: number): Observable<Habitacion> {
  return this.http.get<Habitacion>(this.apiUrl + '/get/' + id);
}


}