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
  opcionSeleccionada: string = '0';
  estaConsultando: boolean = false;
  estaCreando: boolean = false;
  tipoOpcion!: TipoHabitacion;

  constructor(private tipoHabitacionService: TipoHabitacionService) { }

  getTiposHabitaciones(){
    this.tipoHabitacionService.getTiposHabitaciones().subscribe(tiposHabitaciones => {
      this.tiposHabitaciones = tiposHabitaciones;
    });
  }

  consultar(tipo: string){
    console.log(tipo);
    this.tipoHabitacionService.getTipoHabitacion(tipo).subscribe(tipoOpcion => {
      this.tipoOpcion = tipoOpcion;
      this.estaConsultando = true;
      this.estaCreando = false;
    });
  }

  crear(){
    this.tipoOpcion = new TipoHabitacion( this.generarNumeroId(), '', '', 0, 0);
    this.estaConsultando = false;
    this.estaCreando = true;
  }

  guardarTipoHabitacion(){
    const tipoHabitacionData = {
      id: this.tipoOpcion.id,
      tipo: this.tipoOpcion.tipo,
      descripcion: this.tipoOpcion.descripcion,
      precio: this.tipoOpcion.precio,
      capacidad: this.tipoOpcion.capacidad,
    };
    this.tipoHabitacionService.crearTipoHabitacion(tipoHabitacionData).subscribe(response => {
      console.log('Respuesta del servidor:', response);
      alert("Tipo de habitación creado correctamente");
      this.estaConsultando = false;
      this.estaCreando = false;
      this.getTiposHabitaciones();
    });
  }

  actualizarTipoHabitacion(){
    const tipoHabitacionData = {
      id: this.tipoOpcion.id,
      tipo: this.tipoOpcion.tipo,
      descripcion: this.tipoOpcion.descripcion,
      precio: this.tipoOpcion.precio,
      capacidad: this.tipoOpcion.capacidad,
    };
    this.tipoHabitacionService.actualizarTipoHabitacion(this.opcionSeleccionada, tipoHabitacionData).subscribe(response => {
      alert("Tipo de habitación actualizado correctamente");
      this.estaConsultando = false;
      this.getTiposHabitaciones();
    });
  }

  eliminarTipoHabitacion(){
    this.tipoHabitacionService.eliminarTipoHabitacion(this.opcionSeleccionada).subscribe(response => {
      alert("Tipo de habitación eliminado correctamente");
      this.estaConsultando = false;
      this.getTiposHabitaciones();
    });
  }

  generarNumeroId(): number {
    const min = 10000000;
    const max = 99999999;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.getTiposHabitaciones();
  }

}
