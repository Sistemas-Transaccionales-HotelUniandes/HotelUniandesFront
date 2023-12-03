import { Component, OnInit } from '@angular/core';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservas: Reserva[] = [];
  selectedReserva!: Reserva;
  selectedReservaId!: number;
  reservaModel : Reserva = new Reserva(0,0, new Date(),"creada", 0, 0, 0);
  nuevoNumNoches!: number;
  nuevoFechaInicio!: Date;
  nuevoEstado!: String;
  nuevoAcompanantes!: number;
  idHabitacion!: number;
  idCuenta!: number;
  show: boolean = false;

  constructor(private reservaService: ReservaService) { }

  mostrar(): void {
    this.show = !this.show;
  }

  ngOnInit() {
    this.getReservas();
  }

  getReservas(): void {
    this.reservaService.getAllReservas()
      .subscribe(reservas => this.reservas = reservas);
  }

  getReservaById(id: number): void {
    this.reservaService.getReservaById(id)
      .subscribe(reserva => {
        this.selectedReserva = reserva;
        this.selectedReservaId = id;
      });
  }

  deleteReserva(id: number): void {
    this.reservaService.deleteReserva(id)
      .subscribe(response => {
        this.getReservas(); // Actualiza la lista de reservas después de eliminar
      });
  }

  saveReserva(): void {
    this.reservaService.saveReserva(this.reservaModel).subscribe(response => {
      this.getReservas(); // Actualiza la lista de reservas después de save
    });
  }

  updateReserva(): void {
    const reservaActualizada: Reserva = { id: this.selectedReservaId, numNoches: this.nuevoNumNoches, fechaInicio: this.nuevoFechaInicio, estado: this.nuevoEstado, acompanantes: this.nuevoAcompanantes,
    habitacionReserva: this.idHabitacion, cuentaReserva: this.idCuenta };
    this.reservaService.updateReserva(this.selectedReservaId, reservaActualizada)
      .subscribe(response => {
        this.getReservas(); // Actualiza la lista de reservas después de actualizar
      });
  }

}
