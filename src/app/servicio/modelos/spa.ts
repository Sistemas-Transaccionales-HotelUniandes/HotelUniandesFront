import { Servicio } from "./servicio";

class Spa extends Servicio {
    capacidad: number;
    tipo: string;
    horaInicio: string;
    horaFinal: string;
  
    constructor(
      id: number,
      precio: number,
      fecha: Date,
      descripcion: string,
      capacidad: number,
      tipo: string,
      horaInicio: string,
      horaFinal: string
    ) {
      super(id, precio, fecha, descripcion);
      this.capacidad = capacidad;
      this.tipo = tipo;
      this.horaInicio = horaInicio;
      this.horaFinal = horaFinal;
    }
  }