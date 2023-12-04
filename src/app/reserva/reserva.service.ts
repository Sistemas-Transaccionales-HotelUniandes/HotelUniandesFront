import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Reserva } from './reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl: string = environment.baseUrl + 'Reserva';

constructor(private http: HttpClient) { }

saveReserva(reserva: Reserva): Observable<string> {
  return this.http.post<string>(this.apiUrl + '/save', reserva);
}

updateReserva(id: number, reserva: Reserva): Observable<Reserva> {
  return this.http.put<Reserva>(this.apiUrl + '/update/' + id, reserva);
}

deleteReserva(id: number): Observable<string> {
  return this.http.delete<string>(this.apiUrl + '/delete/' + id);
}
getAllReservas(): Observable<Reserva[]> {
  console.log(this.apiUrl);
  return this.http.get<Reserva[]>(this.apiUrl);
}

getReservaById(id: number): Observable<Reserva> {
  return this.http.get<Reserva>(this.apiUrl + '/get/' + id);
}

}
