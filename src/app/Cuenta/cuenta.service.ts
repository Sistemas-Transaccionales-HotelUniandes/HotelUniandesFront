import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cuenta } from './cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

constructor(private http: HttpClient) { }
private apiUrl: string = environment.baseUrl + 'Cuenta';

registrarConsumo(id: number, servicio: number): Observable<Cuenta>{
  return this.http.put<Cuenta>(this.apiUrl + '/update/'+id+'/agregarServicio/', servicio);
}


getAllCuentas(): Observable<Cuenta[]> {
  console.log(this.apiUrl);
  return this.http.get<Cuenta[]>(this.apiUrl);
}
}
