import { Component, OnInit } from '@angular/core';
import { Gimnasio } from './modelos/gimnasio';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  opciones: string[] = ['Gimnasio', 'Piscina', 'Internet', 'Producto', 'Salon', 'Spa'];
  opcionSeleccionada: string = '';
  idIngresado: number = 0;
  estaConsultando: boolean = false;
  gimnasio: Gimnasio = new Gimnasio(0, 0, new Date(), '', 0, 0, '', '');

  constructor(private servicioService: ServicioService) { }

  consultar(){
    if( this.opcionSeleccionada == 'Gimnasio' ){
      this.servicioService.getServicioByTypeAndId(this.opcionSeleccionada, this.idIngresado).subscribe(gimnasio => {
        this.gimnasio = gimnasio;
        console.log(this.gimnasio);
        this.estaConsultando = true;
      });
    }
  }

  crear(){
    if( this.opcionSeleccionada == 'Gimnasio' ){
      this.gimnasio = new Gimnasio(this.idIngresado, 0, new Date(), '', 0, 0, '', '');
      this.estaConsultando = true
    }
  }

  ngOnInit() {
  }

}
