import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva/reserva';
import { ReservaService } from '../reserva/reserva.service';

@Component({
  selector: 'app-estado-reserva',
  templateUrl: './estado-reserva.component.html',
  styleUrls: ['./estado-reserva.component.css']
})
export class EstadoReservaComponent implements OnInit {

  idIngresado: number = 0;
  reserva!: Reserva;

  constructor(private reservaService: ReservaService) { }

  realizarCheckInOut(estado: string){
    this.reservaService.getReservaById(this.idIngresado).subscribe(reserva => {
      this.reserva = reserva;
      this.reserva.estado = estado;
      this.reservaService.updateReserva(this.idIngresado, this.reserva).subscribe(reserva => {
        this.reserva = reserva;
        alert(estado + " realizado correctamente");
      });
    });
  }

  ngOnInit() {
  }

}
