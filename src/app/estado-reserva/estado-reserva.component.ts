import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-reserva',
  templateUrl: './estado-reserva.component.html',
  styleUrls: ['./estado-reserva.component.css']
})
export class EstadoReservaComponent implements OnInit {

  idIngresado: number = 0;

  constructor() { }

  realizarCheckIn(){
    console.log("Check In realizado con éxito");
  }

  ngOnInit() {
  }

}
