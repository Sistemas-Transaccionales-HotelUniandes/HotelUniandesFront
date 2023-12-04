import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva/reserva';

@Component({
  selector: 'app-estado-reserva',
  templateUrl: './estado-reserva.component.html',
  styleUrls: ['./estado-reserva.component.css']
})
export class EstadoReservaComponent implements OnInit {

  idIngresado: number = 0;
  reserva!: Reserva;

  constructor() { }

  realizarCheckIn(){
    console.log("Check In realizado con éxito");
  }

  ngOnInit() {
  }

}
