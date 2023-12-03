import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Gimnasio } from './modelos/gimnasio';

@Injectable()
export class ServicioService {

constructor(private http: HttpClient) { }

  private apiUrl: string = environment.baseUrl + "Servicio";

  getServicioByTypeAndId(type: string, id: number): Observable<any>{
    console.log(this.apiUrl + "/get/" + type + "/" + id);
    return this.http.get<any>(this.apiUrl + "/get/" + type + "/" + id);
  }

  crearGimnasio(servicioData: any): Observable<Gimnasio>{
    return this.http.post<Gimnasio>(this.apiUrl + "/save", servicioData);
  }
}
