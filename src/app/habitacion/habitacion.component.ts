import { Component, OnInit } from '@angular/core';
import { HabitacionService } from './habitacion.service';
import { Habitacion } from './habitacion';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  selectedHabitacion!: Habitacion;
  habitacionModel = new Habitacion(0,0);
  selectedHabitacionId!: number;
  nuevoTipoHabitacionId!: number;
  show: boolean = false;

  constructor(private habitacionService: HabitacionService) { }

  ngOnInit() {
    this.getHabitaciones();
  }

  mostrar(): void {
    this.show = !this.show;
  }

  getHabitaciones(): void {
    this.habitacionService.getAllHabitaciones()
      .subscribe(habitaciones => this.habitaciones = habitaciones);
  }

  getHabitacionById(id: number): void {
    this.habitacionService.getHabitacionById(id)
      .subscribe(habitacion => {
        this.selectedHabitacion = habitacion;
        this.selectedHabitacionId = id;
      });
  }

  deleteHabitacion(id: number): void {
    this.habitacionService.deleteHabitacion(id)
      .subscribe(response => {
        this.getHabitaciones(); // Actualiza la lista de habitaciones después de eliminar
      });
  }

  saveHabitacion(): void {
    this.habitacionService.saveHabitacion(this.habitacionModel).subscribe(response => {
      this.getHabitaciones(); // Actualiza la lista de habitaciones después de save
    });
  }

  updateHabitacion(): void {
    const habitacionActualizada: Habitacion = { id: this.selectedHabitacionId, tipoHabitacionId: this.nuevoTipoHabitacionId };
    this.habitacionService.updateHabitacion(this.selectedHabitacionId, habitacionActualizada)
      .subscribe(response => {
        this.getHabitaciones(); // Actualiza la lista de habitaciones después de actualizar
      });
  }
  

}