import { Component, OnInit } from '@angular/core';
import { TipoHabitacionService } from '../tipo-habitacion.service';
import { TipoHabitacion } from '../tipo-habitacion';

@Component({
  selector: 'app-tipo-habitacion-create',
  templateUrl: './tipo-habitacion-create.component.html',
  styleUrls: ['./tipo-habitacion-create.component.css']
})
export class TipoHabitacionCreateComponent implements OnInit {

  tiposHabitaciones: Array<TipoHabitacion> = [];

  constructor(private tipoHabitacionService: TipoHabitacionService) { }

  getTiposHabitaciones(){
    this.tipoHabitacionService.getTiposHabitaciones().subscribe(tiposHabitaciones => {
      this.tiposHabitaciones = tiposHabitaciones;
    });
  }

  ngOnInit() {
    this.getTiposHabitaciones();
  }

}
